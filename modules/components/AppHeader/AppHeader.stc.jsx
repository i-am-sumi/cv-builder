import { Layout, Tag } from "antd";
import styled from "styled-components";
const { Header } = Layout;

export const Navber = styled(Header)`
    display: flex;
    alignItems: center;
    width: 100%;
    padding-inline: 16px;
    position: sticky,
    top: 0;
    z-index: 1000;
    flex-wrap: wrap;
    gap: 2px;
    flex-wrap:wrap;
    gap: 2px;

    & .menu-item{
        flex: 1;
        justify-content: center;
        background:transparent;
        font-size:15px,
        min-width: 0;
        overflow: hidden;
        font-size: 14px;  
    }

    & .wrapper{
        display: flex;
        gap:2px;
        flex-shrink: 0;
    }

    & .thing{
       display :flex ;
       align-items: center;
       gap: 2px;
       cursor: pointer;
    }
    

            
`;
export const TagItem = styled(Tag)`
  font-size: 13px;
  padding: 2px 7px;
  border-radius: 15px;
`;

/*header->className = "flex-wrap gap-y-2 sm:gap-y-0"; */
