import { testUser } from '../components/UserItem/UserItem.test';
import { checkUserForm } from './checkUserForm';

describe('checkUserForm', () => {
  it(`one error is expected, avatar=null`, () => {
    const errrorArray = checkUserForm(testUser);
    expect(errrorArray.length === 1).toBeTruthy();
  });
});
