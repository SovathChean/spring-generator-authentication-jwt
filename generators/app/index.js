'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const { questions } = require('./js/questions');
const { answersConfig } = require('./js/answers.js');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the world-class ${chalk.red('generator-spring-authentication-jwt')} generator!`
      )
    );

    return this.prompt(questions).then(props => {
      // To access props later use this.props.someAnswer;
      this.crudConfig = answersConfig(props);
    });
  }

  writing() {
    const module = this.crudConfig.module.charAt(0).toUpperCase() + this.crudConfig.module.slice(1);
    const fileName = this.crudConfig.module.toLowerCase()
    //common
    this.destinationRoot("src/main/java/" + this.crudConfig.package_path);
   
    //advise
    this.fs.copyTpl(
      this.templatePath('./jwt/common/advise/ControllerAdviseException.java'),
      this.destinationPath('common/advise/ControllerAdviseException.java'),
      this.crudConfig
    )


    //config
      this.fs.copyTpl(
      this.templatePath('./jwt/common/config/JwtUtilFilter.java'),
      this.destinationPath('common/config/JwtUtilFilter.java'),
      this.crudConfig
    )
    this.fs.copyTpl(
      this.templatePath('./jwt/common/config/SecurityConfig.java'),
      this.destinationPath('common/config/SecurityConfig.java'),
      this.crudConfig
    )
    //controller
    this.fs.copyTpl(
      this.templatePath('./jwt/common/controller/ResponseBuilderMessage.java'),
      this.destinationPath('common/controller/ResponseBuilderMessage.java'),
      this.crudConfig
    )

    this.fs.copyTpl(
      this.templatePath('./jwt/common/controller/ResponseMessage.java'),
      this.destinationPath('common/controller/ResponseMessage.java'),
      this.crudConfig
    )
    
    //exception
    this.fs.copyTpl(
      this.templatePath('./jwt/common/exception/AbstractException.java'),
      this.destinationPath('common/exception/AbstractException.java'),
      this.crudConfig
    )
    this.fs.copyTpl(
      this.templatePath('./jwt/common/exception/BusinessException.java'),
      this.destinationPath('common/exception/BusinessException.java'),
      this.crudConfig
    )
    this.fs.copyTpl(
      this.templatePath('./jwt/common/exception/RaiseException.java'),
      this.destinationPath('common/exception/RaiseException.java'),
      this.crudConfig
    )
    //filter
    this.fs.copyTpl(
      this.templatePath('./jwt/common/filter/AuthorizationFilter.java'),
      this.destinationPath('common/filter/AuthorizationFilter.java'),
      this.crudConfig
    )
    //helper
    this.fs.copyTpl(
      this.templatePath('./jwt/common/helper/JwtAlgorithm.java'),
      this.destinationPath('common/helper/JwtAlgorithm.java'),
      this.crudConfig
    )
    this.fs.copyTpl(
      this.templatePath('./jwt/common/helper/JwtCreateToken.java'),
      this.destinationPath('common/helper/JwtCreateToken.java'),
      this.crudConfig
    )
    this.fs.copyTpl(
      this.templatePath('./jwt/common/helper/JwtGenerateUniqueKey.java'),
      this.destinationPath('common/helper/JwtGenerateUniqueKey.java'),
      this.crudConfig
    )
    this.fs.copyTpl(
      this.templatePath('./jwt/common/helper/JwtVerified.java'),
      this.destinationPath('common/helper/JwtVerified.java'),
      this.crudConfig
    )
    //type
    this.fs.copyTpl(
      this.templatePath('./jwt/common/type/SysHttpResultCode.java'),
      this.destinationPath('common/type/SysHttpResultCode.java'),
      this.crudConfig
    )

    //jwt
    //biz
    this.destinationRoot("src/main/java/" + this.crudConfig.package_path + "/" + fileName);

    //dao
    this.fs.copyTpl(
      this.templatePath('./jwt/biz/dao/OAuthTokenDAO.java'),
      this.destinationPath("biz/dao/OAuthTokenDAO.java"),
      this.crudConfig
    );
    //dto
    this.fs.copyTpl(
      this.templatePath('./jwt/biz/dto/OAuthTokenDTO.java'),
      this.destinationPath("biz/dto/OAuthTokenDTO.java"),
      this.crudConfig
    );
    
    this.fs.copyTpl(
      this.templatePath('./jwt/biz/dto/OAuthTokenFormatDTO.java'),
      this.destinationPath("biz/dto/OAuthTokenFormatDTO.java"),
      this.crudConfig
    );
    //ENTITY
    this.fs.copyTpl(
      this.templatePath('./jwt/biz/entity/OAuthTokenEntity.java'),
      this.destinationPath("biz/entity/OAuthTokenEntity.java"),
      this.crudConfig
    );

  
     //mapper
     this.fs.copyTpl(
      this.templatePath('./jwt/biz/mapper/OAuthTokenMapper.java'),
      this.destinationPath("biz/mapper/OAuthTokenMapper.java"),
      this.crudConfig
    );
    //seeder
    this.fs.copyTpl(
      this.templatePath('./jwt/biz/seeder/DataSeeder.java'),
      this.destinationPath("biz/seeder/DataSeeder.java"),
      this.crudConfig
    );
  
 
    // //service
    this.fs.copyTpl(
        this.templatePath('./jwt/biz/service/AuthenticationService.java'),
        this.destinationPath("biz/service/AuthenticationService.java"),
        this.crudConfig
      );
    // //serviceimpl
    this.fs.copyTpl(
          this.templatePath('./jwt/biz/service/impl/AuthenticationServiceImpl.java'),
          this.destinationPath("biz/service/impl/AuthenticationServiceImpl.java"),
          this.crudConfig
        );
    
    //WED
    //CONTROLLER
    this.fs.copyTpl(
      this.templatePath('./jwt/web/controller/AuthenticationController.java'),
      this.destinationPath("web/controller/AuthenticationController.java"),
      this.crudConfig
    );
    
    //user
    //biz
    this.destinationRoot("src/main/java/" + this.crudConfig.package_path + "/user");

    //ENTITY
    this.fs.copyTpl(
      this.templatePath('./jwt/user/biz/entity/UserEntity.java'),
      this.destinationPath("biz/entity/UserEntity.java"),
      this.crudConfig
    );
    
    //REPOSITORY
    this.fs.copyTpl(
      this.templatePath('./jwt/user/biz/repository/UserRepository.java'),
      this.destinationPath("biz/repository/UserRepository.java"),
      this.crudConfig
    );
      // //service
      this.fs.copyTpl(
        this.templatePath('./jwt/user/biz/service/UserService.java'),
        this.destinationPath("biz/service/UserService.java"),
        this.crudConfig
      );
    // //serviceimpl
    this.fs.copyTpl(
          this.templatePath('./jwt/user/biz/service/impl/UserServiceImpl.java'),
          this.destinationPath("biz/service/impl/UserServiceImpl.java"),
          this.crudConfig
        );
  }
};
