import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function ItemsTable({ items, headers }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map(header => (
              <TableCell id={`header:${header || Math.random()}`}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row, i) => (
            <TableRow key={`row${i || Math.random()}`}>
              {headers.map(header => (
                <TableCell id={`row:${row || Math.random()}`}>
                  {row[header]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ItemsTable;

/*
<body>
    <div class="container">
      <h1 class="text-center py-3">Eventonica</h1>
      <div class="row">
        <div class="col-12 text-center text-muted pt-3">
          <h3>Import Events from Ticketmaster</h3>
        </div>
        <div class="col-12 col-sm-6 pb-3">
          <h5>Search Events</h5>
          <form id="search-ticketmaster">
            <div class="form-group">
              <label for="keyword-input">Search events by keyword:</label>
              <input
                type="text"
                class="form-control"
                id="keyword-input"
                aria-describedby="keyword"
                placeholder="Enter a keyword"
              />
            </div>
            <button type="submit" class="btn btn-success">Search</button>
          </form>
        </div>
        <div class="col-12 col-sm-6">
          <h3>Search Results</h3>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody id="ticketmaster-events"></tbody>
          </table>
        </div>
        <div class="col-12 text-center text-muted pt-3">
          <h3>User Management</h3>
        </div>
        <div class="col-12 col-sm-6 pb-3">
          <h5>Add User</h5>
          <form id="add-user">
            <div class="form-group">
              <label for="add-user-id">User ID:</label>
              <input
                type="text"
                class="form-control"
                id="add-user-id"
                aria-describedby="add user id"
                placeholder="Enter user ID"
              />
              <small id="ID is Optional" class="form-text text-muted"
                >You can leave this field empty for an auto-generated ID</small
              >
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">User Name:</label>
              <input
                type="text"
                class="form-control"
                id="add-user-name"
                placeholder="Enter user name"
              />
            </div>
            <button type="submit" class="btn btn-success">Add User</button>
          </form>
          <br />
          <h5>Delete User</h5>
          <form id="delete-user">
            <div class="form-group">
              <label for="delete-user-id">User ID:</label>
              <input
                type="text"
                class="form-control"
                id="delete-user-id"
                aria-describedby="delete user id"
                placeholder="Enter user ID"
              />
            </div>
            <button type="submit" class="btn btn-danger">Delete User</button>
          </form>
          <br />
          <h5>Add Event to User</h5>
          <form id="save-user-event">
            <div class="form-group">
              <label for="save-user-id">User ID:</label>
              <input
                type="text"
                class="form-control"
                id="save-user-id"
                aria-describedby="save user id"
                placeholder="Enter user ID"
              />
            </div>
            <div class="form-group">
              <label for="save-event-id">Event ID:</label>
              <input
                type="text"
                class="form-control"
                id="save-event-id"
                aria-describedby="save event id"
                placeholder="Enter event ID"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Add Event to User
            </button>
          </form>
          <h4 id="save-user-event-results" class="py-2"></h4>
        </div>
        <div class="col-12 col-sm-6">
          <h3>All Users</h3>
          <ul id="all-users"></ul>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center text-muted pt-5 pb-3">
          <h3>Event Management</h3>
        </div>
        <div class="col-12 col-sm-6  pb-3">
          <h5>Add Event</h5>
          <form id="add-event">
            <div class="form-group">
              <label for="add-event-id">event ID:</label>
              <input
                name="id"
                type="text"
                class="form-control"
                id="add-event-id"
                aria-describedby="add event id"
                placeholder="Enter event ID"
              />
              <small id="ID is Optional" class="form-text text-muted"
                >You can leave this field empty for an auto-generated ID</small
              >
            </div>
            <div class="form-group">
              <label for="add-event-name">Event Name:</label>
              <input
                name="name"
                type="text"
                class="form-control"
                id="add-event-name"
                placeholder="Enter Event name"
              />
            </div>
            <div class="form-group">
              <label for="add-event-category">Event Category:</label>
              <input
                name="category"
                type="text"
                class="form-control"
                id="add-event-category"
                placeholder="Enter Event Category"
              />
            </div>
            <div class="form-group">
              <label for="add-event-date">Event Date:</label>
              <input
                name="date"
                type="date"
                class="form-control"
                id="add-event-date"
                placeholder="Enter Event Date"
              />
            </div>
            <button type="submit" class="btn btn-success">Add event</button>
          </form>
          <br />
          <h5>Delete Event</h5>
          <form id="delete-event" action="/events" method="DELETE">
            <div class="form-group">
              <label for="delete-event-id">event ID:</label>
              <input
                name="id"
                type="text"
                class="form-control"
                id="delete-event-id"
                aria-describedby="delete event id"
                placeholder="Enter event ID"
              />
            </div>
            <button type="submit" class="btn btn-danger">Delete Event</button>
          </form>
          <br />
          <h5>Search Events by Date</h5>
          <form id="date-search">
            <div class="form-group">
              <label for="date-search-id">Date:</label>
              <input
                type="date"
                class="form-control"
                id="date-search-id"
                aria-describedby="Search events by date"
                placeholder="Enter date"
              />
            </div>
            <button type="submit" class="btn btn-warning">Search Events</button>
          </form>
          <h4 id="date-search-results" class="py-2"></h4>
          <ol id="date-search-list"></ol>
          <br />
          <h5>Search Events by Category</h5>
          <form id="category-search">
            <div class="form-group">
              <label for="category-search-id">Category:</label>
              <input
                type="text"
                class="form-control"
                id="category-search-id"
                aria-describedby="Search events by category"
                placeholder="Enter date"
              />
            </div>
            <button type="submit" class="btn btn-warning">Search Events</button>
          </form>
          <h4 id="category-search-results" class="py-2"></h4>
          <ol id="category-search-list"></ol>
        </div>
        <div class="col-12 col-sm-6">
          <h3>All Events</h3>
          <ul id="all-events"></ul>
        </div>
      </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"
    ></script>
  </body>
 */
