package <%= domain %>.biz.service;

import <%= domain %>.biz.dto.OAuthTokenFormatDTO;

public interface AuthenticationService {
    OAuthTokenFormatDTO refreshToken(String token, String unqiueKey) throws Exception;
    void storeUnqiueKey(String unqiueKey);
    void revokeToken(String uniqueKey) throws Exception;
    void logout(String token) throws Exception;
    Boolean hasUniqueKey(String uniqueKey);
}
