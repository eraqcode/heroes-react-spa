const { mount } = require("enzyme");
const { MemoryRouter } = require("react-router-dom");
const { AuthContext } = require("../../auth/authContext");
const { DashBoardRouter } = require("../../routers/DashBoardRouter");

describe('Tests in the DashBoardRouters Component', () => {
    
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Furgencio'
        }
    }

    test('should show correctly itself', () => {
        

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <DashBoardRouter/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const divUser = wrapper.find('.user')
        
        expect( wrapper ).toMatchSnapshot()
        expect( divUser.find('span').text().trim() ).toBe( 'Furgencio' )
    });

});