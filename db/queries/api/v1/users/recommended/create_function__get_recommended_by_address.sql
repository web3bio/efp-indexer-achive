--migrate:up
-------------------------------------------------------------------------------
--
-------------------------------------------------------------------------------
CREATE
OR REPLACE FUNCTION query.get_recommended_by_address (p_address types.eth_address, p_limit BIGINT, p_offset BIGINT) RETURNS TABLE (
  name TEXT,
  address types.eth_address,
  avatar TEXT,
  class TEXT,
  created_at TIMESTAMP WITH TIME ZONE
) LANGUAGE plpgsql AS $$
DECLARE
    normalized_addr types.eth_address;
BEGIN
    normalized_addr := public.normalize_eth_address(p_address);
    RETURN QUERY
    SELECT 
        efp_recommended.name,
        efp_recommended.address,
        efp_recommended.avatar,
        efp_recommended.class,
        efp_recommended.created_at
    FROM public.efp_recommended
    WHERE NOT EXISTS (
        SELECT 1 
        FROM query.get_all_following__record_type_001(normalized_addr) fol
        WHERE efp_recommended.address = fol.following_address
    )
    ORDER BY efp_recommended.index
    LIMIT p_limit   
    OFFSET p_offset;
END;
$$;




--migrate:down