import React from 'react';

class Intro extends React.Component {

    componentDidMount(){
        setTimeout(() => {this.props.history.push("/artgallery")}, 500);
    }

    render() {
        return (            
        <div className="Intro">
            w.e.l.c.o.m.e.,. .h.u.m.a.n. 
        </div>
        )
    }
}
export default Intro;