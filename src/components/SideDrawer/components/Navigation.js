import NavDropdown from "./NavDropdown";

const Navigation = () => {
  return (
    <aside id='dashboard-aside' className='p-3'>
      <h4 className='text-primary-blue'> NAVIGATION </h4>
      <hr />
      <NavDropdown title='Dashboard' linkArray={["dashboard-monthly", "dashboard-yearly", "chat", "chat-room"]} nameList={["Monthly", "Yearly", "Chat", "Chat Room"]} />
      <NavDropdown title='Request' linkArray={["service-create", "service-list"]} nameList={["Create", "List"]} />
      <NavDropdown title='Vehicle' linkArray={["vehicle-create", "vehicle-list"]} nameList={["Create", "List"]} />

      {/* <NavDropdown
        title="Solutions"
        linkArray={["solution-create", "solution-list"]}
        nameList={["Create", "List"]}
      /> */}
      <NavDropdown title='Categories' linkArray={["category-create", "category-list"]} nameList={["Create", "List"]} />
      <NavDropdown title='Organization' linkArray={["organization-create", "organization-list"]} nameList={["Create", "List"]} />
      <NavDropdown title='Users' linkArray={["users-client", "users-mechanics", "users-admin", "users-receptionist"]} nameList={["Clients", "Mechanics", "Admin", "Receptionist"]} />
    </aside>
  );
};

export default Navigation;
