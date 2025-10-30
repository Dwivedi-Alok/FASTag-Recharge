import React, { useState } from 'react';

// The provider list from your code
const providers = [
  "ICICI Bank", "HDFC Bank", "State Bank of India", "Axis Bank",
  "Kotak Mahindra Bank", "IDFC First Bank", "Amazon Pay",
  "Airtel Payments Bank", "AU Small Finance Bank", "Equitas Small Finance Bank",
];

// --- Color Palette ---
const colors = {
  green100: 'oklch(96.2% 0.044 156.743)',
  green400: 'oklch(79.2% 0.209 151.711)',
  green500: 'oklch(72.3% 0.219 149.57)',
  teal100: 'oklch(95.3% 0.051 180.801)',
  teal300: 'oklch(85.5% 0.138 181.071)',
  teal400: 'oklch(77.7% 0.152 181.912)',
  teal500: 'oklch(70.4% 0.14 182.503)',
};

// --- Compact Style Object ---
const s = {
  overlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, fontFamily: 'Arial, sans-serif' },
  content: { backgroundColor: 'white', borderRadius: '8px', width: '90%', maxWidth: '400px', maxHeight: '80vh', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', overflow: 'hidden' },
  header: { padding: '16px 20px', borderBottom: `1px solid ${colors.teal100}`, fontSize: '1.2rem', fontWeight: '600', color: colors.teal500 },
  searchWrap: { padding: '16px 20px', borderBottom: `1px solid ${colors.teal100}` },
  input: { width: '100%', padding: '10px 12px', border: `1px solid ${colors.teal300}`, borderRadius: '6px', fontSize: '1rem', boxSizing: 'border-box', transition: 'all 0.2s ease' },
  list: { overflowY: 'auto', flex: 1 },
  item: { padding: '14px 20px', cursor: 'pointer', borderBottom: `1px solid ${colors.teal100}`, transition: 'all 0.2s ease' },
  itemNoResult: { padding: '20px', color: '#777', fontStyle: 'italic' },
  footer: { padding: '12px 20px', borderTop: `1px solid ${colors.teal100}`, textAlign: 'right', backgroundColor: '#f9f9f9' },
  closeBtn: { padding: '10px 20px', border: 'none', borderRadius: '6px', backgroundColor: colors.green400, color: 'white', fontSize: '0.9rem', fontWeight: '500', cursor: 'pointer', transition: 'background-color 0.2s ease' },
};

// --- Component ---
const ProviderModal = ({ isOpen, onClose, onSelectProvider }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredProviders = providers.filter(provider =>
    provider.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Dynamic <style> tag to inject hover/focus pseudo-classes
  const hoverStyles = `
    .provider-item:hover {
      background-color: ${colors.green100} !important;
      color: ${colors.green500} !important;
      padding-left: 25px !important;
    }
    .close-btn:hover {
      background-color: ${colors.green500} !important;
    }
    .search-input:focus {
      outline: none;
      border-color: ${colors.green500};
      box-shadow: 0 0 0 2px ${colors.green100};
    }
  `;

  return (
    <div style={s.overlay} onClick={onClose}>
      {/* This <style> tag applies the hover effects */}
      <style>{hoverStyles}</style>
      
      {/* Stop propagation so clicking content doesn't close modal */}
      <div style={s.content} onClick={e => e.stopPropagation()}>
        
        <div style={s.header}>
          Select FASTag Provider
        </div>

        <div style={s.searchWrap}>
          <input
            className="search-input"
            style={s.input}
            type="text"
            placeholder="Search for your bank..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        <div style={s.list}>
          {filteredProviders.length > 0 ? (
            filteredProviders.map(provider => (
              <div
                key={provider}
                className="provider-item"
                style={s.item}
                onClick={() => {
                  onSelectProvider(provider);
                  onClose();
                }}
              >
                {provider}
              </div>
            ))
          ) : (
            <div style={s.itemNoResult}>
              No providers found.
            </div>
          )}
        </div>

        <div style={s.footer}>
          <button
            className="close-btn"
            style={s.closeBtn}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProviderModal;