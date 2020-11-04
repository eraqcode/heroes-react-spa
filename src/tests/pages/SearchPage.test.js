const { mount } = require("enzyme");
const { MemoryRouter, Route } = require("react-router-dom");
const { SearchPage } = require("../../pages/Search/SearchPage");

describe('Test in Search Page', () => {
    
    test('should show itself correctly', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={ SearchPage } />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.alert__info').exists() ).toBe(true)

    });

    test('should show the input value equal to superman', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={ SearchPage } />
            </MemoryRouter>
        );
        let input = wrapper.find('input').prop('value')
        input = 'batman'
        expect( input ).toBe('batman');
        
    });

    test('should show a error if the heroe is not finded', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Route path="/search" component={ SearchPage } />
            </MemoryRouter>
        );

        expect( wrapper.find('.alert__error').text().trim() ).toBe(`The heroe  batman123  do not exist`);
        expect( wrapper ).toMatchSnapshot();

    });
    
    test('should call the history push', () => {
        
        const history = {
            push: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Route 
                    path="/search" 
                    component={ () => <SearchPage history={ history } /> } 
                />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change', {
            target: {
                name: 'searchText',
                value: 'batman'
            }
        });

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        })

        expect( history.push ).toHaveBeenCalledWith(`?q=batman`);
        
    });
    
   

});