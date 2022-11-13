package <%= domain_name %>.biz.seeder;

import <%= domain_name %>.user.biz.entity.UserEntity;
import <%= domain_name %>.user.biz.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder {
    @Autowired
    private UserRepository repository;

    @Bean
    CommandLineRunner userSeederRunning()
    {
        String password = new BCryptPasswordEncoder().encode("password");
        UserEntity userEntity = new UserEntity();
        userEntity.setPassword(password);
        userEntity.setUsername("useradmin");


        return args -> {
            repository.save(userEntity);
        };
    }
}
