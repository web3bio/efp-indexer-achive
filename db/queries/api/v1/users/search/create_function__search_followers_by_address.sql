--migrate:up
-------------------------------------------------------------------------------
--
-------------------------------------------------------------------------------
CREATE
OR REPLACE FUNCTION query.search_followers_by_address (p_address types.eth_address, p_term TEXT, p_limit BIGINT, p_offset BIGINT) RETURNS TABLE (
  follower types.eth_address,
  name TEXT,
  avatar TEXT,
  efp_list_nft_token_id types.efp_list_nft_token_id,
  tags types.efp_tag [],
  is_following BOOLEAN,
  is_blocked BOOLEAN,
  is_muted BOOLEAN,
  updated_at TIMESTAMP WITH TIME ZONE
) LANGUAGE plpgsql AS $$
DECLARE
    normalized_addr types.eth_address;
BEGIN
    normalized_addr := public.normalize_eth_address(p_address);
    
IF public.is_valid_address(p_term) THEN
    RETURN QUERY
    SELECT  
        v.follower,
        meta.name,
        meta.avatar,
        v.efp_list_nft_token_id,
        v.tags,
        v.is_following,
        v.is_blocked,
        v.is_muted,
        v.updated_at
    FROM query.get_unique_followers(normalized_addr) v
    LEFT JOIN public.ens_metadata meta ON meta.address = v.follower
    WHERE v.follower ~ p_term
    LIMIT p_limit   
    OFFSET p_offset;
ELSE 
    RETURN QUERY
    SELECT  
        v.follower,
        meta.name,
        meta.avatar,
        v.efp_list_nft_token_id,
        v.tags,
        v.is_following,
        v.is_blocked,
        v.is_muted,
        v.updated_at
    FROM query.get_unique_followers(normalized_addr) v
    JOIN public.ens_metadata meta ON meta.address = v.follower
    AND (meta.name ~ p_term OR v.follower ~ p_term)
    LIMIT p_limit   
    OFFSET p_offset;
END IF;
END;
$$;




--migrate:down