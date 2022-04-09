import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


export default function Header(){
    return (
            <div 
                style={styles.headerWrapper}
            >
                <div style={styles.logo} >Logo</div>
                <div
                    style={styles.headerInner}
                >
                    {
                        ["Home", "About", "Directory", "Login"].map( (item) => 
                            (
                                <div style={styles.navLink} >{item}</div>
                            )
                        )
                    }
                </div>
            </div>
     )
}

const styles = {
    headerWrapper : {
        display : 'flex',
        height : '5vh', 
        backgroundColor: '#f6f1e0',
        marginTop : -10
    },
    headerInner : {
        display : 'flex',
        width : '50%'
    },
    logo : {
        width : '50%'
    },
    navLink : {
        width : '25%',
        textAlign : 'center'
    }
}