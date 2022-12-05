export default function Table({ title, description, columns, data }) {
    return (
      <table style={ { width: '300px' }}>
        <caption style={ { textAlign: 'left' }}>
          <h2>{title}</h2>
          <p>{description}</p> 
        </caption>
  
        <thead>
          <tr>
            {columns.map(({ name, prop }) => (
              <th key={prop}>{name}</th>
            ))}
          </tr>
        </thead>
  
        <tbody>
          {data.map(row => { 
            return (
            <tr key={row.id}>
  
              {/* vai inserir o conteúdo da linha na posição correta da tabela */}
              {columns.map(({ prop }) => {
                return (
                <td key={prop}>{row[prop]}</td>
              )})}
  
            </tr>
          )})}
        </tbody>
  
        <tfoot>
          <tr>
            <td colSpan={columns.length} style={ { textAlign: 'right' }}>
              <strong>Total de alunos:</strong> {data.length}
            </td>
          </tr>
        </tfoot>
      </table>
    )
  }