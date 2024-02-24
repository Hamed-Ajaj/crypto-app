import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi"
import { Select, Typography, Row, Col, Avatar, Card } from "antd"
import Loader from "./Loader";
import moment from "moment";
const { Text, Title } = Typography;
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
const demoDescription = 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
const { Option } = Select;
const News = ({simplified}) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 10 : 100})
  const items = simplified ? cryptoNews?.data?.slice(0, 6) : cryptoNews?.data?.slice(0,20);
  console.log(items);
  if (!cryptoNews?.data) return <Loader />;
  return (
    <Row gutter={[24,24]} >
    {items?.map((news, i) => (
      <Col xs={24} sm={12} lg={8} key={i}>
        <Card hoverable className="news-card" style={{position:"relative"}}>
          <a href={news.url} target="_blank" rel="noreferrer">
            <div className="news-image-container">
              <Title className="news-title" level={4}>{news?.title}</Title>
              <img src={news?.thumbnail || demoImage} alt="" style={{
                maxWidth: '200px',
                maxHeight: '100px'
              }} />
            </div>
            <p>{(news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description)||demoDescription.substring(0,100)+"..."}</p>
            <div className="provider-container" >
              <div style={{position:"absolute",bottom:"20px",left:"20px"}}>
                <Avatar src={news?.thumbnail || demoImage} alt="" />
              </div>
              <Text style={{position:"absolute",bottom:"20px",right:"20px"}}>{moment(news.createdAt).startOf('ss').fromNow()}</Text>
            </div>
          </a>
        </Card>
      </Col>
    ))}
  </Row>
  )
}

export default News
