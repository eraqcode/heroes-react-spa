const { mount } = require("enzyme");
const { MemoryRouter, Route } = require("react-router-dom");
const { HeroPage } = require("../../pages/Hero/HeroPage");

describe('Test in the Heroes Page', () => {
    
    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    };

   

    test('should show the Redirect component ifthere are not arguments in URL', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe']}>
                <HeroPage history={ history } />
            </MemoryRouter>
            
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('Redirect').exists() ).toBe(true)
    });

    test('should show the heroe if the parameterexist', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/dc-batman']}>
                <Route path='/heroe/:heroeId' component={ HeroPage } />
            </MemoryRouter>
            
        );
            
        expect( wrapper.find('.header-page__content').text().trim() ).toBe('Batman')
    });
    
    test('should return to the home page when the length of history is <= 2', () => {
        
        const history = {
            length: 2,
            push: jest.fn(),
            goBack: jest.fn()
        };
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/dc-batman']}>
                <Route 
                    path='/heroe/:heroeId' 
                    component={ (props) =>  <HeroPage history={history}/> } />
            </MemoryRouter>
            
        );

        wrapper.find('button').simulate('click');
        expect( history.push ).toHaveBeenCalledWith('/')
        expect( history.goBack ).not.toHaveBeenCalledWith()

    });

    test('should return to the previuos page when the length of history is > 2', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/dc-batman']}>
                <Route 
                    path='/heroe/:heroeId' 
                    component={ (props) =>  <HeroPage history={history}/> } />
            </MemoryRouter>
            
        );
        
        wrapper.find('button').simulate('click');
        expect( history.push ).not.toHaveBeenCalledWith('/')
        expect( history.goBack ).toHaveBeenCalledWith()


    })
    
    

});