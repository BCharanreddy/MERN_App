import "./dashboard.css";

function Dashboard({ name }) {
    return (
        <div className="dashboard">
            <aside>
                <h1>Admin Panel</h1>
                <ul>
                    <li>Dashboard</li>
                    <li>Students</li>
                    <li>Courses</li>
                    <li>Reports</li>
                    <li>Settings</li>
                </ul>
            </aside>
            <main>
                <header>
                    <h1>Dashboard</h1>
                    <p>Welcome,{name}</p>
                </header>
                <div className="report">
                    <div>
                        <h3>Total Students</h3>
                        <h1>1,250</h1>
                    </div>
                    <div>
                        <h3>Courses</h3>
                        <h1>24</h1>
                    </div>
                    <div>
                        <h3>Revenue</h3>
                        <h1>$85k</h1>
                    </div>
                    <div>
                        <h3>Pending Tasks</h3>
                        <h1>18</h1>
                    </div>
                </div>
                <section>
                    <div className="enrollments">
                        <h3>Recent enrollments</h3>
                        <table cellSpacing="0">
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <th>Course</th>
                                    <th>Status</th>
                                </tr>

                                <tr>
                                    <td>Ravi</td>
                                    <td>CSS</td>
                                    <td>Active</td>
                                </tr>

                                <tr>
                                    <td>Priya</td>
                                    <td>HTML</td>
                                    <td>Active</td>
                                </tr>

                                <tr>
                                    <td>Kiran</td>
                                    <td>JavaScript</td>
                                    <td>Pending</td>
                                </tr>
                                <tr></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="notice">
                        <h3>Notice</h3>
                        <article>
                            <p>Next live session is scheduled for<br />
                                CSS Flexbox and Grid practice</p>
                        </article>

                    </div>
                </section>
            </main>
        </div>
    )
}
export default Dashboard;