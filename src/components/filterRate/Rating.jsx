import React from 'react';
import { Flex, Rate } from 'antd';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const App = ({searchRate, setSearchRate, isRate, rate}) => {
//   const [value, setValue] = useState(3);
  return (
    <Flex gap="middle" vertical style={{margin:'20px'}}>
    {isRate?
      (<Rate value={rate} disabled/>):

     ( <Rate tooltips={desc} onChange={setSearchRate} value={searchRate} />)}
      {/* {value ? <span>{desc[value - 1]}</span> : null} */}
    </Flex>
  );
};
export default App;