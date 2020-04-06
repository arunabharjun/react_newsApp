This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Comparing Functional and Class component 


#### 
In the project directory, you can run:
### `npm start`
#
## Comparison

#### Class Component

```js
class Counter_Class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}
	increment = () => {
		this.setState({
			count: this.state.count + 1
		});
	};
	reset = () => {
		this.setState({
			count: 0
		});
    };
    
    componentDidMount(){
		document.title = `Class Clicled ${this.state.count} times`
	}

	componentDidUpdate(){
		document.title = `Class Clicled ${this.state.count} times`
    }
    
	render() {
		return ( < div > < button type = 'button'
			class = 'btn btn-raised btn-outline-success btn-lg btn-block'
			onClick = {
				this.increment
			} > Clicked {
				this.state.count
			}
			times < /button>
				<br / > < center > < button onClick = {
				this.reset
			}
			type = 'button'
			class = 'btn btn-success bmd-btn-fab' > < i class = 'material-icons' > refresh < /i>
					</button > < /center>
			</div > );
	}
}
```

## Functional Component

```js
const Counter_fn = () => {
	const [
		count,
		setCount
	] = useState(0);
	const increment = () => {
		setCount(count + 1);
	};
	const reset = () => {
		setCount(0);
    };
    
    useEffect(() => {
		document.title = `Fn Clicled ${count} times`
    })
    
	return ( < div > < button type = 'button'
		class = 'btn btn-raised btn-outline-info btn-lg btn-block'
		onClick = {
			increment
		} > Clicked {
			count
		}
		times < /button>
			<br / > < center > < button onClick = {
			reset
		}
		type = 'button'
		class = 'btn btn-info bmd-btn-fab' > < i class = 'material-icons' > refresh < /i>
				</button > < /center>
		</div > );
};
```
