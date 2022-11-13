package <%= domain %>.biz.dao;

import <%= domain %>.biz.entity.OAuthTokenEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OAuthTokenDAO extends JpaRepository<OAuthTokenEntity, Long> {

    OAuthTokenEntity findByUniqueKey(String uniqueKey);
    Boolean existsByUniqueKey(String uniqueKey);
}
