import { AuthReducer } from '../../auth/authReducer'
import { types } from '../../types/types';

describe('Test in AuthReducer File', () => {
    
    test('should return the default state ', () => {
        
        const state = AuthReducer( { logged: false }, {});
        expect(state).toEqual( { logged:false } )

    });

    test('should authenticate and put the username login', () => {
        
        const action = {
            type: types.login,
            payload: {
                name: 'Pepito',
            }
        }
        const state = AuthReducer( { logged: false }, action )
        expect(state).toEqual({
            logged: true,
            name: 'Pepito'
        })
    });

    test('should to delete the usernameand logged: false', () => {
        
        const action = {
            type: types.logout,
            
        }

        const state = AuthReducer( { logged: true, name: 'Pepito' }, action )
        expect(state).toEqual({
            logged: false,
            
        })

    });

});