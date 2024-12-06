const User = require('./User');

test('User model should create a user with valid attributes', () => {
    const user = new User({ name: 'John Doe', email: 'john@example.com' });
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john@example.com');
});

test('User model should not create a user without a name', () => {
    const user = new User({ email: 'john@example.com' });
    expect(user.name).toBeUndefined();
});

test('User model should not create a user without an email', () => {
    const user = new User({ name: 'John Doe' });
    expect(user.email).toBeUndefined();
});