import styled from 'styled-components'

export const ContainerCalendarSchedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1030px;
  /* max-height: calc(100vh - 236px); */
  padding: 30px 30px 0 30px;

  h2 {
    color: #2E78BD;
  }
`
export const Events = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  .ant-badge-status {
    width: 100%;
    overflow: hidden;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

export const NotesMonth = styled.div`
  font-size: 28px;
  text-align: center;

  .section {
  font-size: 28px;
  }
`
