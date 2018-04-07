import Auth0Lock from 'auth0-lock';

const authDomain = 'tictacgame.auth0.com';
const clientId = 'gYR5j1S3uT3fj6NXucR7rlbHYXdBPJhi';

class AuthService {
    constructor() {
        this.lock = new Auth0Lock(clientId, authDomain, {
            auth: {
                params: {
                    scope: 'openid email'
                },
            },
        });
        this.showLock = this.showLock.bind(this)
        this.lock.on('authenticated', this.authProcess.bind(this))
    }

    showLock() {
        this.lock.show()
    };

    setToken = (authFields) => {
        let {
            idToken,
            exp
        } = authFields
        localStorage.setItem('idToken', idToken);
        localStorage.setItem('exp', exp * 1000)
    };

    authProcess = (authResult) => {
        console.log(authResult);
    };



    isCurrent = () => {
        let expString = localStorage.getItem('exp');
        if(!expString) {
            localStorage.removeItem('idToken')
            return false;
        }
        let now = new Date();
        let exp = new Date(parseInt(expString, 10));

        if (exp<now) {
            this.logout()
            return false
        }else {
            return true
        }
    };

    getToken(){
        let idToken = localStorage.getItem('idToken');
        if(this.isCurrent() && idToken) {
            return idToken
        }else {
            localStorage.removeItem('idToken');
            localStorage.removeItem('exp');
            return false;
        }
    }

    logout() {
        localStorage.removeItem('idToken')
        localStorage.removeItem('exp')
        window.location.reload()
    }

}

const auth = new AuthService();

export default auth;