var px = 64

var WorldView = React.createClass({
    render: function() {
        return (
            <canvas ref="canvas"
                style={this.renderStyles()}
                width={this.props.data.width * px}
                height={this.props.data.height * px}/>
        )
    },
    renderStyles: function() {
        return {
            width: this.props.data.width + "em",
            height: this.props.data.height + "em",
            zIndex: -2,
            position: "relative"
        }
    },
    renderTiles: function() {
        var canvas = this.getCanvas()
        for(var key in this.props.data.tiles) {
            var tile = this.props.data.tiles[key]
            
            var x = tile.position.x
            var y = tile.position.y
            var color = tile.color
            
            canvas.fillStyle = color
            canvas.fillRect(x * px, y * px, px, px)
        }
    },
    componentDidMount: function() {
        this.renderTiles()
    },
    getCanvas: function() {
        return this.refs.canvas.getDOMNode().getContext("2d")
    }
})

module.exports = WorldView
