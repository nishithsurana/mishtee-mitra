"use client";

import React, { useState } from 'react';

export default function MishTeeDeliveryDashboard() {
  const [isNavigating, setIsNavigating] = useState(false);

  // --- Design Tokens ---
  const colors = {
    brandOrange: '#FF6B00', // Vibrant mishTee Orange
    successGreen: '#28a745',
    textDark: '#333333',
    textLight: '#666666',
    bgGray: '#f4f6f8',
    white: '#ffffff',
  };

  // --- Styles ---
  const styles = {
    pageContainer: {
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#eeeeee',
      display: 'flex',
      justifyContent: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      margin: 0,
      padding: 0,
    },
    mobileWrapper: {
      width: '100%',
      maxWidth: '500px',
      backgroundColor: colors.white,
      minHeight: '100vh',
      position: 'relative',
      boxShadow: '0 0 20px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderBottom: `1px solid ${colors.bgGray}`,
    },
    logo: {
      width: '80px',
      height: 'auto',
      marginBottom: '16px',
    },
    title: {
      fontSize: '22px',
      fontWeight: '700',
      color: colors.brandOrange,
      margin: '0 0 8px 0',
      textAlign: 'center',
    },
    statusContainer: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#e6f4ea', // Light green bg
      padding: '8px 16px',
      borderRadius: '20px',
      marginTop: '8px',
    },
    statusDot: {
      width: '10px',
      height: '10px',
      backgroundColor: colors.successGreen,
      borderRadius: '50%',
      marginRight: '8px',
      // Animation is handled via the <style> tag below
      animation: 'pulse 2s infinite',
    },
    statusText: {
      fontSize: '14px',
      fontWeight: '600',
      color: colors.successGreen,
    },
    contentArea: {
      padding: '24px',
      flex: 1,
      backgroundColor: colors.bgGray,
    },
    sectionLabel: {
      fontSize: '14px',
      fontWeight: '600',
      color: colors.textLight,
      marginBottom: '12px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    taskCard: {
      backgroundColor: colors.white,
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      marginBottom: '24px',
      borderLeft: `4px solid ${colors.brandOrange}`,
    },
    customerName: {
      fontSize: '18px',
      fontWeight: '700',
      color: colors.textDark,
      marginTop: '8px',
      marginBottom: '4px',
    },
    addressText: {
      fontSize: '14px',
      color: colors.textLight,
      lineHeight: '1.4',
    },
    actionButton: {
      width: '100%',
      backgroundColor: isNavigating ? colors.successGreen : colors.brandOrange,
      color: colors.white,
      border: 'none',
      borderRadius: '12px',
      padding: '18px',
      fontSize: '16px',
      fontWeight: '700',
      cursor: 'pointer',
      boxShadow: '0 4px 6px rgba(255, 107, 0, 0.2)',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
    }
  };

  return (
    <div style={styles.pageContainer}>
      {/* Injecting keyframes for the pulsing dot. 
        This is the only necessary internal CSS block for animations 
        that cannot be done via inline styles.
      */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.7); }
          70% { box-shadow: 0 0 0 6px rgba(40, 167, 69, 0); }
          100% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0); }
        }
        body { margin: 0; padding: 0; }
      `}} />

      <main style={styles.mobileWrapper}>
        
        {/* Header Section */}
        <header style={styles.header}>
          <img 
            src="https://raw.githubusercontent.com/sudhir-voleti/mishtee-magic/main/mishTee_logo.png" 
            alt="mishTee Logo" 
            style={styles.logo}
          />
          <h1 style={styles.title}>mishTee Delivery Mitra</h1>
          
          <div style={styles.statusContainer}>
            <div style={styles.statusDot}></div>
            <span style={styles.statusText}>Agent Online</span>
          </div>
        </header>

        {/* Main Content */}
        <div style={styles.contentArea}>
          
          <div style={styles.sectionLabel}>Current Task</div>

          {/* Task Card */}
          <div style={styles.taskCard}>
            <div style={{...styles.addressText, fontWeight: 'bold', color: colors.brandOrange}}>
              DELIVER TO:
            </div>
            <div style={styles.customerName}>Arjun Mehta</div>
            <div style={styles.addressText}>
              Flat 402, Sunshine Towers,<br/>
              Hitech City, Hyderabad
            </div>
            
            <div style={{marginTop: '16px', paddingTop: '16px', borderTop: '1px dashed #eee', display: 'flex', justifyContent: 'space-between'}}>
                <span style={{fontSize: '13px', color: '#888'}}>Order ID: #9982A</span>
                <span style={{fontSize: '13px', fontWeight: 'bold', color: colors.textDark}}>Cash on Delivery</span>
            </div>
          </div>

          {/* Action Button */}
          <button 
            style={styles.actionButton}
            onClick={() => setIsNavigating(!isNavigating)}
          >
            {isNavigating ? 'Navigating...' : 'Start Navigation'}
          </button>

        </div>
      </main>
    </div>
  );
}
