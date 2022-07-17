import { Button, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from  './Bootstrap.module.css'

function Bootstrap() {
    return(
        <div>
            <h3>Bootstrap Components</h3>
            <div className={styles.flexCenter}>
                <Button>Info</Button>
                <Button variant='success'>Open</Button>
                <Button variant='danger'>Close</Button>
            </div>
            <br/>
            <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Home">
                    <div>Home</div>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <div>Profile</div>
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    <div>Contact</div>
                </Tab>
            </Tabs>
        </div>
    )    
}

export default Bootstrap;