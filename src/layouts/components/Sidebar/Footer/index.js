import { Link } from 'react-router-dom';

function Footer({ title, to, href }) {
    let Comp = 'p';
    const props = {
        title,
    };
    if (href) {
        Comp = 'a';
        props.href = href;
    } else {
        Comp = Link;
        props.to = to;
    }
    return (
        <Comp {...props}>
            {props.title}
        </Comp>
    );
}

export default Footer;
