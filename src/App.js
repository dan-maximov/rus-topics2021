import "antd/dist/antd.css";
import { Layout, Typography, List, Button } from "antd";
import { useRandomTopics } from "./useRandomTopics";
import "./app.css"

const { Header, Content, Footer } = Layout;

export default function App() {
  const [currentTopics, generateNewTopics] = useRandomTopics();

  return (
    <Layout className="layout">
      <Header className="header">
        <Typography.Title level={2} className="title">
          Генератор тем для итогового сочинения 2021
        </Typography.Title>
      </Header>
      <Content className="content">
        <List
          itemLayout="horizontal"
          dataSource={currentTopics}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta title={item.title} description={item.topic} />
            </List.Item>
          )}
        />
        <Button onClick={generateNewTopics}>Сгенерирновать новые темы</Button>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        <a href="https://github.com/dan-maximov" rel="noreferrer noopener" target="_blank">
          Daniel Maximov 2021
        </a>
      </Footer>
    </Layout>
  );
}
