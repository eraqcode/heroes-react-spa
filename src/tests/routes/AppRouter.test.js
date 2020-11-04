const { mount } = require("enzyme");
const { MemoryRouter } = require("react-router-dom");
const { AuthContext } = require("../../auth/authContext");
const { AppRouter } = require("../../routers/AppRouter");

describe('Test in AppRouter component', () => {
    
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Juanito'
        }
    }

    test('should show Login component if username is not authenticated ', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                 <MemoryRouter>
                    <AppRouter

                    />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( wrapper ).toMatchSnapshot();

    });

    test('should show the marvel component if the username is athenticated', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                 <MemoryRouter>
                    <AppRouter

                    />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( wrapper.find('.navbar').exists() ).toBe( true )
    });

});