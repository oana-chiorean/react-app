import React from 'react';

const EmptyList = () => 
<div>the list is empty, add items and they will appear here</div>

class ListPage extends React.Component {
    render () {
        return <div>
            {this.props.items.length > 0 ? 
            (<div>main content</div>) :
            <EmptyList />
    }
    </div>
    }
}

export default ListPage;