import { ActionButtonRow, Content, DraggableTopBar, FloatingTitleBar, MarkdonwEditor, NotePreviewList, RootLayout, Sidebar } from './components';
import './App.css'

const App = ()=> {
  return (
    <>
      <RootLayout>
        <DraggableTopBar/>
        <Sidebar className='p-4'>
          <ActionButtonRow className='flex justify-between my-2'/>
          <NotePreviewList className='mt-3 space-y-1'/>
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">
          <FloatingTitleBar className='pt-2'/>
          <MarkdonwEditor/>
        </Content>
      </RootLayout>
    </>
  )
}

export default App;
