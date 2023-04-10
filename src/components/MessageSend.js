function MessageSend() {
    return (
      <form>
        <input 
          type="text" 
          placeholder="ENTER to send"/>
        <label>
          <input 
            type="checkbox"/>
          {' '}
          Only show messages from friends
        </label>
      </form>
    );
}

export default MessageSend;