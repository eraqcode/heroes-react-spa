const { mount } = require("enzyme");
const { AuthContext } = require("../../auth/authContext");
const { LoginPage } = require("../../pages/Login/LoginPage");
const { types } = require("../../types/types");

describe('Test in Login Page', () => {
    
    const history = {
        push: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn()
    }

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <LoginPage history={history} />
        </AuthContext.Provider>
        
    )

    test('should show itself correctly', () => {
        
        expect( wrapper ).toMatchSnapshot()

    });

    test('should to do the dispatch and navigation', () => {
        
        wrapper.find('button').simulate('click')

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: { name: 'Erik A' }
        });
        expect( history.push ).toHaveBeenCalledWith('/')

        localStorage.setItem('lastPath', '/dc')
        wrapper.find('button').simulate('click')
        expect( history.push ).toHaveBeenCalledWith('/dc')
    });

});