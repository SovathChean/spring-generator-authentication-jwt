package <%= domain_name %>.user.biz.service;

import <%= domain_name %>.user.biz.entity.UserEntity;

public interface UserService {
    UserEntity findAuth();
}
