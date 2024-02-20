import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const progress = useRef(0);

  const [data, setData] = useState({
    fullName: '',
    email: '',
    maritalStatus: '',
    genre: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setData((prev) => {
      const newData = { ...prev, [name]: value };
      return newData;
    })
  }

  useEffect(() => {
    let barSize = 0;
    Object.values(data).forEach(object => {
      if (object !== '') {
        barSize++
        progress.current.style.width = `${barSize * 25}%`
      }
    })
  }, [data])

  return (
    <main>
      <div className="progress-bar">
        <div className="progress-of-bar" ref={progress} style={{ width: '0%' }}></div>
      </div>
      <label htmlFor="name">Nome Completo</label>
      <input type="text" value={data.fullName} name='fullName'
        onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input type="email" value={data.email} name='email'
        onChange={handleChange} />
      <label htmlFor="civic-state">Estado Civil</label>
      <select name='maritalStatus' value={data.maritalStatus} onChange={handleChange}>
        <option value="">- selecione...</option>
        <option value="Solteiro">Solteiro</option>
        <option value="Casado">Casado</option>
        <option value="Divorciado">Divorciado</option>
        <option value="Viúvo">Viúvo</option>
      </select>
      <label htmlFor="gender">Gênero</label>
      <div className="radio-btn">
        <span>
          <input type="radio" name='genre' value="male"
            checked={data.genre === 'male'} onChange={handleChange} /> Masculino </span>
        <span>
          <input type="radio" name='genre' value="female"
            checked={data.genre === 'female'} onChange={handleChange} /> Feminino</span>
      </div>
      <button>Enviar Formulário</button>
    </main>
  )
}

export default App
