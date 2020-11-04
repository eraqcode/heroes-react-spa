const { shallow, mount } = require("enzyme");
const { MemoryRouter } = require("react-router-dom");
const { PrivateRoutes } = require("../../routers/PrivateRoutes");

describe('Tests in the PrivateRoutes component', () => {
    
    const props = {
        location: {
            pathname:'/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn()

    test('should to show the component if username is authenticated', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoutes
                    isAuthenticated={ true }
                    component={ () => <span> Ready!! </span> }
                    {...props}
                />
            </MemoryRouter>
        )

       
        expect(wrapper.find('span').exists()).toBe(true)
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel')
    });

    test('should not show components if username is not authenticated', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoutes
                    isAuthenticated={ false }
                    component={ () => <span> Ready!! </span> }
                    {...props}
                />
            </MemoryRouter>
        )
        
        expect(wrapper.find('span').exists()).toBe(false)
    });

});