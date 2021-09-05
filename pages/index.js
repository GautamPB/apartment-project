import Head from 'next/head'
import Header from '../components/Header'
import UnitComponent from '../components/UnitComponent'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Apartment App</title>
            </Head>

            <div className="m-10">
                <Header />
                <UnitComponent
                    id="1"
                    image="https://im.proptiger.com/1/3077929/6/ananda-elevation-109628867.jpeg"
                    name="Berlin Apartment"
                    rating={5}
                    location="Kalyanagar 308 Kalyanagar"
                    price="$16.00 /Month"
                    area="1m - 15m"
                />

                <UnitComponent
                    id="2"
                    image="https://im.proptiger.com/1/3077929/6/ananda-elevation-109628867.jpeg"
                    name="Berlin Apartment"
                    rating={4}
                    location="Kalyanagar 308 Kalyanagar"
                    price="$16.00 /Month"
                    area="1m - 15m"
                />
            </div>
        </div>
    )
}
