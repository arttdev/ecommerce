from werkzeug.security import check_password_hash
from flask_login import UserMixin

class User(UserMixin):
    def __init__(self, id, username, password, fname= "") -> None:
        self.id = id
        self.username = username
        self.password = password
        self.fname = fname

    @classmethod
    def check_password(self, hashed_password, password):
        return check_password_hash(hashed_password, password)
    
    # print(generate_password_hash('HolaMundo'))
    # print(len(generate_password_hash('HolaMundo')))
