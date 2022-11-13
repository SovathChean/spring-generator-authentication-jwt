# generator-spring-authentication-jwt [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Authentication with jwt token

## Prerequirement
  1. Java JDK 11 or newer (can be an open-jdk distro)
  2. Gradle 2+
  3. NPM
  4. Yeoman
  5. Maven 3+

## About this package

This package is a spring-boot jwt-authentication generator that uses jpa as the primary class for object and database mapping. The main goal of this package is to speed up the process of implementing authentication with spring framework, which can take some time to do. By installing this package, it can do all the work by creating the all the necessary files with just one command. Although this package will do most of the job for processing authentication, the developer must be aware of certain limitations, how to use, install, and initiate the application properties, and how to add some dependencies on both Maven and Gradle that the package cannot handle.

## Awareness
This package author use Gradle dependency for test, build the project and Intellij as the code editor.
For the project to be processed, some of the below gradle dependency elements must be included:

	implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
	implementation 'org.springframework.boot:spring-boot-starter-oauth2-client'
	implementation 'org.springframework.boot:spring-boot-starter-oauth2-resource-server'
	implementation 'org.springframework.boot:spring-boot-starter-validation'
	implementation 'org.springframework.boot:spring-boot-starter-security'
	implementation 'org.apache.commons:commons-lang3:3.12.0'
	implementation 'org.springframework.boot:spring-boot-starter-web'
	implementation group: 'com.auth0', name: 'java-jwt', version: '4.0.0'
	implementation "org.mapstruct:mapstruct:$mapstructVersion"
	implementation 'org.projectlombok:lombok:1.18.24'
	runtimeOnly 'org.postgresql:postgresql'

	compileOnly 'org.projectlombok:lombok'

	compileOnly 'io.jsonwebtoken:jjwt:0.9.1'

	annotationProcessor 'org.projectlombok:lombok'
	annotationProcessor "org.mapstruct:mapstruct-processor:$mapstructVersion"

	testImplementation 'org.springframework.boot:spring-boot-starter-test'
	testImplementation 'org.springframework.security:spring-security-test'


******* This is just the gradle that author use be aware that you can modify version or you wish to implement with maven; please want to make sure that the below gradle or maven dependency topics have been install:
 * Lombok
 * SpringWeb
 * OAuth2Client
 * OAuth2ResourceClient
 * SpringSecurity
 * JsonWebTokenJwt
 * SpringDataJPA
 * MapStruct
 * Postgre (or any database)
 * SpringValidation

***** Warning: The configuration of database have to be define by your own as well.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-spring-authentication-jwt using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-spring-authentication-jwt
```

Then generate your new project:

```bash
yo spring-authentication-jwt
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## How to use

 1. Go to your spring boot project directory
 2. Type in command "yo spring-jpa-crud-generator"
 3. Provide domain of the project. ex: com.myapi.com
 4. Finally, package will automatically generate some of the necessary files.


## Features
Generation of fully-functional springboot REST API, using:

 * Java 11
 * Spring-boot 2.2 REST API
 * Gredle 2+

## Integrations
This generator allows to integrate the springboot REST API with:

* PostgreSQL
* Oracle
* SQL

## Functionality

The jwt-authentication generator will deliver the following: 

 * Generate clean architectural using OOP and SOLID concepts.
 * Authentication using OAuth2 concept with JWT as web token.
 * ControllerAdvise implementation which will give the global throwable json format

## Example Project

Github: https://github.com/SovathChean/spring-auth-jwt.git

## License

Apache-2.0 © [SovathChean]()


[npm-image]: https://badge.fury.io/js/generator-spring-authentication-jwt.svg
[npm-url]: https://npmjs.org/package/generator-spring-authentication-jwt
[travis-image]: https://travis-ci.com/SovathChean/generator-spring-authentication-jwt.svg?branch=master
[travis-url]: https://travis-ci.com/SovathChean/generator-spring-authentication-jwt
[daviddm-image]: https://david-dm.org/SovathChean/generator-spring-authentication-jwt.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/SovathChean/generator-spring-authentication-jwt
[coveralls-image]: https://coveralls.io/repos/SovathChean/generator-spring-authentication-jwt/badge.svg
[coveralls-url]: https://coveralls.io/r/SovathChean/generator-spring-authentication-jwt
