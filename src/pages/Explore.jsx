import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, MapPin, SlidersHorizontal, X, RefreshCw } from 'lucide-react';
import VendorCard from '../components/VendorCard';
import categoriesData from '../data/categories.json';
import vendorsData from '../data/vendors.json';
import './Explore.css';

export default function Explore() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArea, setSelectedArea] = useState('all');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Sync state with URL Search Params
  useEffect(() => {
    const catParam = searchParams.get('category');
    const areaParam = searchParams.get('area');
    const queryParam = searchParams.get('search');

    if (catParam) setSelectedCategory(catParam);
    else setSelectedCategory('all');

    if (areaParam) setSelectedArea(areaParam);
    else setSelectedArea('all');

    if (queryParam) setSearchQuery(queryParam);
    else setSearchQuery('');
  }, [searchParams]);

  // Extract all unique locations/areas from vendors database
  const areas = ['all', ...new Set(vendorsData.map(v => v.area))];

  // Handle filter changes and update URL params
  const handleCategoryChange = (catId) => {
    const newParams = new URLSearchParams(searchParams);
    if (catId === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', catId);
    }
    setSearchParams(newParams);
    setShowMobileFilters(false);
  };

  const handleAreaChange = (area) => {
    const newParams = new URLSearchParams(searchParams);
    if (area === 'all') {
      newParams.delete('area');
    } else {
      newParams.set('area', area);
    }
    setSearchParams(newParams);
    setShowMobileFilters(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams);
    if (!searchQuery.trim()) {
      newParams.delete('search');
    } else {
      newParams.set('search', searchQuery);
    }
    setSearchParams(newParams);
  };

  const clearAllFilters = () => {
    setSearchParams({});
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedArea('all');
  };

  // Filter vendors based on active states
  const filteredVendors = vendorsData.filter((vendor) => {
    const matchesCategory = selectedCategory === 'all' || vendor.category === selectedCategory;
    const matchesArea = selectedArea === 'all' || vendor.area === selectedArea;
    
    const matchesSearch = searchQuery.trim() === '' || 
      vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.story.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesArea && matchesSearch;
  });

  // Calculate product counts for categories and areas under current filters (excluding own filter to follow standard commerce logic)
  const getCategoryCount = (catId) => {
    return vendorsData.filter(v => {
      const matchesArea = selectedArea === 'all' || v.area === selectedArea;
      const matchesSearch = searchQuery.trim() === '' || v.name.toLowerCase().includes(searchQuery.toLowerCase());
      return (catId === 'all' || v.category === catId) && matchesArea && matchesSearch;
    }).length;
  };

  const getAreaCount = (areaName) => {
    return vendorsData.filter(v => {
      const matchesCat = selectedCategory === 'all' || v.category === selectedCategory;
      const matchesSearch = searchQuery.trim() === '' || v.name.toLowerCase().includes(searchQuery.toLowerCase());
      return (areaName === 'all' || v.area === areaName) && matchesCat && matchesSearch;
    }).length;
  };

  return (
    <div className="explore-page container">
      <div className="explore-header reveal">
        <span className="badge badge-primary">Vendor Discovery</span>
        <h1>Discover Neighborhood Shops</h1>
        <p>Order directly from verified local merchants. Speed meets community authenticity.</p>
      </div>

      {/* Search Input Area */}
      <div className="explore-search-bar reveal" style={{ marginBottom: '2rem' }}>
        <form onSubmit={handleSearchSubmit} className="search-wrapper">
          <input
            type="text"
            placeholder="Search by shop name, products, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <Search size={18} className="search-icon-inside" />
          {searchQuery && (
            <button 
              type="button" 
              onClick={() => { setSearchQuery(''); const np = new URLSearchParams(searchParams); np.delete('search'); setSearchParams(np); }} 
              style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}
            >
              <X size={18} />
            </button>
          )}
        </form>
      </div>

      {/* Mobile filter toggle */}
      <button 
        className="btn btn-outline mobile-filters-trigger"
        onClick={() => setShowMobileFilters(true)}
      >
        <SlidersHorizontal size={18} />
        Filter & Sort Shops
        {(selectedCategory !== 'all' || selectedArea !== 'all') && (
          <span className="badge badge-primary" style={{ marginLeft: '4px' }}>Active</span>
        )}
      </button>

      <div className="explore-layout">
        {/* Sidebar Filters */}
        <aside className={`filter-panel ${showMobileFilters ? 'mobile-show' : ''}`}>
          {showMobileFilters && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h2>Filters</h2>
              <button onClick={() => setShowMobileFilters(false)} style={{ background: 'none', cursor: 'pointer', color: 'var(--color-secondary)' }}>
                <X size={24} />
              </button>
            </div>
          )}

          {/* Categories Filter */}
          <div className="filter-section">
            <h3>Categories</h3>
            <div className="filter-list">
              <button 
                className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('all')}
              >
                <span>All Categories</span>
                <span className="filter-count">{getCategoryCount('all')}</span>
              </button>
              {categoriesData.map((cat) => (
                <button 
                  key={cat.id} 
                  className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  <span>{cat.name}</span>
                  <span className="filter-count">{getCategoryCount(cat.id)}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Location Area Filter */}
          <div className="filter-section">
            <h3>Neighborhood</h3>
            <div className="filter-list">
              {areas.map((area) => (
                <button 
                  key={area} 
                  className={`filter-btn ${selectedArea === area ? 'active' : ''}`}
                  onClick={() => handleAreaChange(area)}
                >
                  <span style={{ textTransform: 'capitalize' }}>
                    {area === 'all' ? 'All Neighborhoods' : area}
                  </span>
                  <span className="filter-count">{getAreaCount(area)}</span>
                </button>
              ))}
            </div>
          </div>

          {(selectedCategory !== 'all' || selectedArea !== 'all' || searchQuery) && (
            <button className="btn btn-outline" onClick={clearAllFilters} style={{ fontSize: '0.85rem' }}>
              <RefreshCw size={14} />
              Reset All Filters
            </button>
          )}
        </aside>

        {/* Results Area */}
        <main className="explore-main">
          <div className="results-bar">
            <p>
              Showing <strong>{filteredVendors.length}</strong> {filteredVendors.length === 1 ? 'shop' : 'shops'}
              {selectedCategory !== 'all' && ` in "${categoriesData.find(c => c.id === selectedCategory)?.name}"`}
              {selectedArea !== 'all' && ` near ${selectedArea}`}
            </p>
            {(selectedCategory !== 'all' || selectedArea !== 'all' || searchQuery) && (
              <button className="clear-filters-btn" onClick={clearAllFilters}>
                Clear filters
              </button>
            )}
          </div>

          {filteredVendors.length > 0 ? (
            <div className="vendor-grid">
              {filteredVendors.map((vendor) => (
                <VendorCard key={vendor.id} vendor={vendor} />
              ))}
            </div>
          ) : (
            <div className="empty-state reveal">
              <Search size={48} className="empty-icon" />
              <h3>No Shops Found</h3>
              <p>We couldn't find any neighborhood partners matching your criteria. Try adjusting your category search filters or clearing text.</p>
              <button className="btn btn-primary" onClick={clearAllFilters}>
                View All Partners
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
