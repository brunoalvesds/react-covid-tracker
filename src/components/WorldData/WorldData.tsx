import { useState, Component, createRef } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader } from 'grommet'
import { Favorite, ShareOption, Tooltip } from 'grommet-icons'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'

class WorldData extends Component {

    state = {
        totalReactPackages: 0
    }
    constructor(props: any) {
        super(props);
    }

    async componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search');
        const data = await response.json();
        this.setState({ totalReactPackages: data.data.rows[0].active_cases })
        console.log("res: ", this.state.totalReactPackages);
    }

    render() {
        return (
            <div className='world-data'>
                <Card height="small" width="small" background="white">
                    <CardHeader pad="medium">World Cases</CardHeader>
                    <CardBody pad="medium">
                        {this.state.totalReactPackages}
                        <LineChart
                            width={400}
                            height={400}
                            // data={}
                            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                        >
                            <XAxis dataKey="name" />
                            <Tooltip />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                            <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
                        </LineChart>

                    </CardBody>
                    <CardFooter pad={{ horizontal: "small" }} background="brand">
                        <Button
                            icon={<Favorite color="red" />}
                            hoverIndicator
                        />
                        <Button icon={<ShareOption color="white" />} hoverIndicator />
                    </CardFooter>
                </Card>
            </div>
        );
    }
}

export default WorldData
