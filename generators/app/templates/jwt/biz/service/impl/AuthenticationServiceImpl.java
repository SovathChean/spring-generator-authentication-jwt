package <%= domain %>.biz.service.impl;

import com.auth0.jwt.interfaces.DecodedJWT;
import <%= domain %>.biz.dao.OAuthTokenDAO;
import <%= domain %>.biz.dto.OAuthTokenFormatDTO;
import <%= domain %>.biz.entity.OAuthTokenEntity;
import <%= domain %>.biz.service.AuthenticationService;
import <%= domain_name %>.common.helper.JwtCreateToken;
import <%= domain_name %>.common.helper.JwtVerified;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;


@Service
@Slf4j
public class AuthenticationServiceImpl implements AuthenticationService {
    @Autowired
    private OAuthTokenDAO authTokenDAO;

    @Override
    public OAuthTokenFormatDTO refreshToken(String token, String unqiueKey) throws Exception {
        DecodedJWT decodedJWT = JwtVerified.getVerified(token);
        String username = decodedJWT.getSubject();
        String tokenKey = decodedJWT.getClaim("tokenKey").asString();
        String issuer = decodedJWT.getIssuer();
        this.revokeToken(tokenKey);
        OAuthTokenFormatDTO oAuthTokenFormatDTO = JwtCreateToken.createTokens(issuer, username, unqiueKey);
        log.info("Refreshtoken successfully.");
        return oAuthTokenFormatDTO;
    }

    @Override
    public void storeUnqiueKey(String uniqueKey) {
        OAuthTokenEntity oAuthTokenEntity = new OAuthTokenEntity();
        oAuthTokenEntity.setUniqueKey(uniqueKey);
        oAuthTokenEntity.setRequestAt(LocalDateTime.now());
        authTokenDAO.save(oAuthTokenEntity);
        log.info("store token unqiue key successfully.");
    }

    @Override
    public void revokeToken(String uniqueKey) throws ResponseStatusException {
        OAuthTokenEntity oAuthTokenEntity = authTokenDAO.findByUniqueKey(uniqueKey);
        if(oAuthTokenEntity == null) throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Token doesn't exist");
        log.info("revoke token successfully.");

        authTokenDAO.delete(oAuthTokenEntity);
    }

    @Override
    public void logout(String token) throws Exception {
        DecodedJWT decodedJWT = JwtVerified.getVerified(token);
        String tokenKey = decodedJWT.getClaim("tokenKey").asString();
        log.info("logout successfully.");

        this.revokeToken(tokenKey);
    }
    
    @Override
    public Boolean hasUniqueKey(String uniqueKey) {
        return authTokenDAO.existsByUniqueKey(uniqueKey);
    }
}
