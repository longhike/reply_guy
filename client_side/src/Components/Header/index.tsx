import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

function Header() {

    const [loggedIn, setLoggedIn] = useState(false)
    
    return (
        <Navbar>
            <Navbar.Brand style={{ flex: 1 }}>
                REPLY GUY
            </Navbar.Brand>
            <ButtonToolbar className="mr-2">
                <ButtonGroup>
                    {loggedIn ? <Button id="google_sign_in" className='btn-sm' onClick={() => {
                        console.log('signing in');
                        setLoggedIn(!loggedIn)
                    }}>
                        Sign In with Google
                    </Button> : 
                    <Button id="logout" className='btn-sm' onClick={() => {
                        console.log('logging out');
                        setLoggedIn(!loggedIn)
                    }}>
                        Logout
                    </Button> 
                    }
                    
                </ButtonGroup>
            </ButtonToolbar>
        </Navbar>
    )
    
}

export default Header;