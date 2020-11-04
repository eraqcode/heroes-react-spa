const { mount } = require("enzyme");
const { MemoryRouter, Router } = require("react-router-dom");
const { AuthContext } = require("../../auth/authContext");
const { NavBar } = require("../../components/NavBar/NavBar");
const { types } = require("../../types/types");

describe('Test in the NavBa Component', () => {
    
    const historyMock = {
        replace: jest.fn(),
        push: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Pedrinho'
        }
    }
   
    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter>
                <Router history={ historyMock }>
                    <NavBar/>
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    )
    
    const divUser = wrapper.find('.user')

    afterEach( () => {
        jest.clearAllMocks();
    })
    


    test('should show itself correctly', () => {
        
        
        expect( wrapper ).toMatchSnapshot();
        expect( divUser.find('span').text().trim() ).toBe( 'Pedrinho' )
    });

    test('should call the logout and use history prop', () => {
        
        divUser.find('button').simulate('click')
         
        expect( historyMock.replace ).toHaveBeenCalledWith("/login")
        expect( contextValue.dispatch ).toHaveBeenCalledWith( { type: types.logout } )
        
    });


});