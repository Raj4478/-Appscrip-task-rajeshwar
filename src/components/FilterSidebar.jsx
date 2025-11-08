import "../styles/globals.css";

export default function FilterSidebar({ isMobile = false, onClose = () => {} }) {
  return (
    <aside className={`filter-sidebar ${isMobile ? 'mobile-filter' : ''}`} aria-labelledby="filters-heading">
      {isMobile && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--border)', paddingBottom: '16px' }}>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>FILTERS</h3>
          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}
            aria-label="Close filters"
          >
            ×
          </button>
        </div>
      )}
      <div className="filters">
        <label className="checkbox">
          <input type="checkbox" aria-label="Customizable" /> 
          <span style={{marginLeft:8}}>CUSTOMIZABLE</span>
        </label>

        <div className="filter-group">
          <details>
            <summary>IDEAL FOR</summary>
            <div style={{paddingLeft:12,color:'var(--muted)',fontSize:14}}>All</div>
            <ul>
              <li>Men</li>
              <li>Women</li>
              <li>Baby & Kids</li>
            </ul>
          </details>

          <details>
            <summary>OCCASION</summary>
            <div style={{paddingLeft:12,color:'var(--muted)',fontSize:14}}>All</div>
          </details>

          <details>
            <summary>WORK</summary>
            <div style={{paddingLeft:12,color:'var(--muted)',fontSize:14}}>All</div>
          </details>

          <details>
            <summary>FABRIC</summary>
            <div style={{paddingLeft:12,color:'var(--muted)',fontSize:14}}>All</div>
          </details>

          <details>
            <summary>SEGMENT</summary>
            <div style={{paddingLeft:12,color:'var(--muted)',fontSize:14}}>All</div>
          </details>

          <details>
            <summary>SUITABLE FOR</summary>
            <div style={{paddingLeft:12,color:'var(--muted)',fontSize:14}}>All</div>
          </details>

          <details>
            <summary>RAW MATERIALS</summary>
            <div style={{paddingLeft:12,color:'var(--muted)',fontSize:14}}>All</div>
          </details>

          <details>
            <summary>PATTERN</summary>
            <div style={{paddingLeft:12,color:'var(--muted)',fontSize:14}}>All</div>
          </details>
        </div>
      </div>
    </aside>
  );
}
