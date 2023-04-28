class Config:
    SECRET_KEY = 'd0e4d3e0aaa403538715a5331865ccbb9738c1f8e5df4d1a50eb89679c555758'
    

class DevelopmentConfig(Config):
    DEBUG = True
    MYSQL_HOST = 'localhost'
    MYSQL_USER = 'root'
    MYSQL_PASSWORD = ''
    MYSQL_DB = 'store'
    
config={
    'development': DevelopmentConfig
}
