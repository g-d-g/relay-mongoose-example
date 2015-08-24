import Hobby from './Hobby.js';

class User extends React.Component {
  render() {
    var user = this.props.users;
    console.log(user);

    return (
      <div>
        <h1>Hello {user.name} {user.surname}</h1>
        <h2>Hobbies</h2>
        <ul>
        {user.hobbies.map(hobby => {
            return <Hobby hobby={hobby} />;
          })}
        </ul>
        <h2>Age: {user.age}</h2>
      </div>
    );
  }
}

export default Relay.createContainer(User, {
  fragments: {
    users: () => Relay.QL`
      fragment on User {
        name,
        surname,
        age,
        ${Hobby.getFragment('hobby')},
      }
    `
  }
});