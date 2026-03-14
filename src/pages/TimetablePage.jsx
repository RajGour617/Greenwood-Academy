import React, { useState } from 'react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const studentTimetable = {
  class: '10-A',
  section: 'Science',
  schedule: [
    { period: 1, time: '8:00 – 8:45 AM',
      Monday:    { subject: 'Mathematics',        faculty: 'Mr. R. Sharma' },
      Tuesday:   { subject: 'English Literature', faculty: 'Mrs. S. Gupta' },
      Wednesday: { subject: 'Mathematics',        faculty: 'Mr. R. Sharma' },
      Thursday:  { subject: 'Computer Science',   faculty: 'Mr. A. Verma' },
      Friday:    { subject: 'Mathematics',        faculty: 'Mr. R. Sharma' },
    },
    { period: 2, time: '8:45 – 9:30 AM',
      Monday:    { subject: 'Physics',            faculty: 'Ms. N. Patel' },
      Tuesday:   { subject: 'Mathematics',        faculty: 'Mr. R. Sharma' },
      Wednesday: { subject: 'Chemistry',          faculty: 'Dr. P. Mehta' },
      Thursday:  { subject: 'English Literature', faculty: 'Mrs. S. Gupta' },
      Friday:    { subject: 'Biology',            faculty: 'Ms. K. Joshi' },
    },
    { period: 3, time: '9:30 – 10:15 AM',
      Monday:    { subject: 'Chemistry',          faculty: 'Dr. P. Mehta' },
      Tuesday:   { subject: 'Physics',            faculty: 'Ms. N. Patel' },
      Wednesday: { subject: 'English Literature', faculty: 'Mrs. S. Gupta' },
      Thursday:  { subject: 'Mathematics',        faculty: 'Mr. R. Sharma' },
      Friday:    { subject: 'Chemistry',          faculty: 'Dr. P. Mehta' },
    },
    { period: 'Break', time: '10:15 – 10:30 AM',
      Monday: null, Tuesday: null, Wednesday: null, Thursday: null, Friday: null,
    },
    { period: 4, time: '10:30 – 11:15 AM',
      Monday:    { subject: 'Biology',            faculty: 'Ms. K. Joshi' },
      Tuesday:   { subject: 'Chemistry',          faculty: 'Dr. P. Mehta' },
      Wednesday: { subject: 'Physics',            faculty: 'Ms. N. Patel' },
      Thursday:  { subject: 'Biology',            faculty: 'Ms. K. Joshi' },
      Friday:    { subject: 'English Literature', faculty: 'Mrs. S. Gupta' },
    },
    { period: 5, time: '11:15 AM – 12:00 PM',
      Monday:    { subject: 'History',            faculty: 'Mr. D. Rao' },
      Tuesday:   { subject: 'Computer Science',   faculty: 'Mr. A. Verma' },
      Wednesday: { subject: 'History',            faculty: 'Mr. D. Rao' },
      Thursday:  { subject: 'Physics',            faculty: 'Ms. N. Patel' },
      Friday:    { subject: 'Computer Science',   faculty: 'Mr. A. Verma' },
    },
    { period: 'Lunch', time: '12:00 – 12:45 PM',
      Monday: null, Tuesday: null, Wednesday: null, Thursday: null, Friday: null,
    },
    { period: 6, time: '12:45 – 1:30 PM',
      Monday:    { subject: 'Computer Science',   faculty: 'Mr. A. Verma' },
      Tuesday:   { subject: 'History',            faculty: 'Mr. D. Rao' },
      Wednesday: { subject: 'Biology',            faculty: 'Ms. K. Joshi' },
      Thursday:  { subject: 'Chemistry',          faculty: 'Dr. P. Mehta' },
      Friday:    { subject: 'History',            faculty: 'Mr. D. Rao' },
    },
    { period: 7, time: '1:30 – 2:15 PM',
      Monday:    { subject: 'Physical Education', faculty: 'Mr. T. Singh' },
      Tuesday:   { subject: 'Physical Education', faculty: 'Mr. T. Singh' },
      Wednesday: { subject: 'Art & Craft',        faculty: 'Ms. R. Nair' },
      Thursday:  { subject: 'Art & Craft',        faculty: 'Ms. R. Nair' },
      Friday:    { subject: 'Physical Education', faculty: 'Mr. T. Singh' },
    },
  ],
};

const facultyTimetable = {
  name: 'Mr. R. Sharma',
  subject: 'Mathematics',
  schedule: [
    { period: 1, time: '8:00 – 8:45 AM',
      Monday:    { class: '10-A', room: 'Room 201' },
      Tuesday:   { class: null,   room: null },
      Wednesday: { class: '10-A', room: 'Room 201' },
      Thursday:  { class: '9-B',  room: 'Room 105' },
      Friday:    { class: '10-A', room: 'Room 201' },
    },
    { period: 2, time: '8:45 – 9:30 AM',
      Monday:    { class: '9-A',  room: 'Room 102' },
      Tuesday:   { class: '10-A', room: 'Room 201' },
      Wednesday: { class: '11-B', room: 'Room 305' },
      Thursday:  { class: '10-A', room: 'Room 201' },
      Friday:    { class: '9-A',  room: 'Room 102' },
    },
    { period: 3, time: '9:30 – 10:15 AM',
      Monday:    { class: '11-B', room: 'Room 305' },
      Tuesday:   { class: '9-A',  room: 'Room 102' },
      Wednesday: { class: '9-B',  room: 'Room 105' },
      Thursday:  { class: '11-B', room: 'Room 305' },
      Friday:    { class: null,   room: null },
    },
    { period: 'Break', time: '10:15 – 10:30 AM',
      Monday: null, Tuesday: null, Wednesday: null, Thursday: null, Friday: null,
    },
    { period: 4, time: '10:30 – 11:15 AM',
      Monday:    { class: '9-B',  room: 'Room 105' },
      Tuesday:   { class: '11-B', room: 'Room 305' },
      Wednesday: { class: '10-A', room: 'Room 201' },
      Thursday:  { class: '9-A',  room: 'Room 102' },
      Friday:    { class: '11-B', room: 'Room 305' },
    },
    { period: 5, time: '11:15 AM – 12:00 PM',
      Monday:    { class: null,   room: null },
      Tuesday:   { class: '9-B',  room: 'Room 105' },
      Wednesday: { class: '9-A',  room: 'Room 102' },
      Thursday:  { class: null,   room: null },
      Friday:    { class: '9-B',  room: 'Room 105' },
    },
    { period: 'Lunch', time: '12:00 – 12:45 PM',
      Monday: null, Tuesday: null, Wednesday: null, Thursday: null, Friday: null,
    },
    { period: 6, time: '12:45 – 1:30 PM',
      Monday:    { class: '11-B', room: 'Room 305' },
      Tuesday:   { class: null,   room: null },
      Wednesday: { class: null,   room: null },
      Thursday:  { class: '9-B',  room: 'Room 105' },
      Friday:    { class: '10-A', room: 'Room 201' },
    },
    { period: 7, time: '1:30 – 2:15 PM',
      Monday:    { class: null,   room: null },
      Tuesday:   { class: '10-A', room: 'Room 201' },
      Wednesday: { class: '11-B', room: 'Room 305' },
      Thursday:  { class: null,   room: null },
      Friday:    { class: '9-A',  room: 'Room 102' },
    },
  ],
};

const subjectMeta = {
  'Mathematics':        { bg: '#e8f5e9', border: '#2e7d32', icon: '📐' },
  'Physics':            { bg: '#e3f2fd', border: '#1565c0', icon: '⚡' },
  'Chemistry':          { bg: '#fce4ec', border: '#c62828', icon: '🧪' },
  'Biology':            { bg: '#f3e5f5', border: '#6a1b9a', icon: '🌿' },
  'English Literature': { bg: '#fff8e1', border: '#e65100', icon: '📖' },
  'Computer Science':   { bg: '#e0f7fa', border: '#00695c', icon: '💻' },
  'History':            { bg: '#fbe9e7', border: '#bf360c', icon: '🏛️' },
  'Physical Education': { bg: '#f1f8e9', border: '#558b2f', icon: '🏃' },
  'Art & Craft':        { bg: '#fdf6e3', border: '#f9a825', icon: '🎨' },
};

const TimetablePage = ({ role }) => {
  const todayIndex = new Date().getDay(); // 0=Sun
  const today = todayIndex >= 1 && todayIndex <= 5 ? days[todayIndex - 1] : 'Monday';
  const [activeDay, setActiveDay] = useState(today);
  const isStudent = role === 'student';
  const data = isStudent ? studentTimetable : facultyTimetable;

  const renderDesktopCell = (row, day) => {
    const isBreak = row.period === 'Break' || row.period === 'Lunch';
    if (isBreak) return null;
    const cell = row[day];
    const isToday = day === today;

    if (isStudent) {
      const meta = subjectMeta[cell.subject] || { bg: '#f9f9f9', border: '#ccc', icon: '📚' };
      return (
        <td key={day} className={`tt-td tt-td-cell ${isToday ? 'tt-today-col' : ''}`}>
          <div className="tt-cell-pill" style={{ background: meta.bg, borderLeft: `3px solid ${meta.border}` }}>
            <span className="tt-cell-icon">{meta.icon}</span>
            <span className="tt-cell-main">{cell.subject}</span>
            <span className="tt-cell-sub">{cell.faculty}</span>
          </div>
        </td>
      );
    } else {
      const isFree = !cell.class;
      return (
        <td key={day} className={`tt-td tt-td-cell ${isToday ? 'tt-today-col' : ''}`}>
          {isFree ? (
            <div className="tt-cell-free">Free</div>
          ) : (
            <div className="tt-cell-pill tt-faculty-pill" style={{ background: '#e8f5e9', borderLeft: '3px solid #2e7d32' }}>
              <span className="tt-cell-main">{cell.class}</span>
              <span className="tt-cell-sub">{cell.room}</span>
            </div>
          )}
        </td>
      );
    }
  };

  const renderMobileCard = (row) => {
    const isBreak = row.period === 'Break' || row.period === 'Lunch';
    const cell = row[activeDay];

    if (isBreak) {
      return (
        <div key={row.period} className="tt-mobile-break-card">
          <span className="tt-mobile-break-icon">{row.period === 'Lunch' ? '🍱' : '☕'}</span>
          <span className="tt-mobile-break-text">{row.period} · {row.time}</span>
        </div>
      );
    }

    if (isStudent) {
      const meta = subjectMeta[cell.subject] || { bg: '#f9f9f9', border: '#ccc', icon: '📚' };
      return (
        <div key={row.period} className="tt-mobile-card" style={{ background: meta.bg, borderLeft: `4px solid ${meta.border}` }}>
          <div className="tt-mobile-card-top">
            <span className="tt-mobile-period-badge">P{row.period}</span>
            <span className="tt-mobile-time">{row.time}</span>
          </div>
          <div className="tt-mobile-card-body">
            <span className="tt-mobile-icon">{meta.icon}</span>
            <div>
              <div className="tt-mobile-subject">{cell.subject}</div>
              <div className="tt-mobile-faculty">{cell.faculty}</div>
            </div>
          </div>
        </div>
      );
    } else {
      const isFree = !cell.class;
      return (
        <div key={row.period} className={`tt-mobile-card ${isFree ? 'tt-mobile-free' : ''}`}
          style={!isFree ? { background: '#e8f5e9', borderLeft: '4px solid #2e7d32' } : {}}>
          <div className="tt-mobile-card-top">
            <span className="tt-mobile-period-badge">P{row.period}</span>
            <span className="tt-mobile-time">{row.time}</span>
          </div>
          {isFree ? (
            <div className="tt-mobile-free-label">Free Period</div>
          ) : (
            <div className="tt-mobile-card-body">
              <span className="tt-mobile-icon">🏫</span>
              <div>
                <div className="tt-mobile-subject">{cell.class}</div>
                <div className="tt-mobile-faculty">{cell.room}</div>
              </div>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="timetable-page">

      {/* ── Header ── */}
      <div className="tt-header">
        <div>
          <div className="tt-header-eyebrow">
            {isStudent ? 'Student · Class 10-A · Science' : 'Faculty · Mathematics Department'}
          </div>
          <h1 className="tt-title">
            {isStudent ? 'My Weekly Timetable' : 'Teaching Schedule'}
          </h1>
          <p className="tt-subtitle">Academic Year 2025 – 2026 &nbsp;·&nbsp; Term II</p>
        </div>
        <div className="tt-header-stats">
          <div className="tt-stat">
            <span className="tt-stat-value">{isStudent ? '7' : '5'}</span>
            <span className="tt-stat-label">{isStudent ? 'Subjects' : 'Classes'}</span>
          </div>
          <div className="tt-stat">
            <span className="tt-stat-value">5</span>
            <span className="tt-stat-label">Days/Week</span>
          </div>
          <div className="tt-stat">
            <span className="tt-stat-value">{isStudent ? '35' : '28'}</span>
            <span className="tt-stat-label">Periods/Week</span>
          </div>
        </div>
      </div>

      {/* ── Today banner ── */}
      <div className="tt-today-banner">
        <span className="tt-today-dot-pulse"></span>
        <span>Today is <strong>{today}</strong> — {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
      </div>

      {/* ── Day tabs (mobile) ── */}
      <div className="tt-day-tabs">
        {days.map(day => (
          <button key={day}
            className={`tt-day-tab ${activeDay === day ? 'active' : ''} ${day === today ? 'today' : ''}`}
            onClick={() => setActiveDay(day)}>
            <span className="tt-day-short">{day.slice(0, 3)}</span>
            {day === today && <span className="tt-day-today-dot"></span>}
          </button>
        ))}
      </div>

      {/* ── Desktop Table ── */}
      <div className="tt-table-wrap">
        <table className="tt-table">
          <thead>
            <tr>
              <th className="tt-th tt-th-meta">Period</th>
              <th className="tt-th tt-th-meta">Time</th>
              {days.map(day => (
                <th key={day} className={`tt-th ${day === today ? 'tt-th-today' : ''}`}>
                  <span className="tt-th-day">{day}</span>
                  {day === today && <span className="tt-th-today-chip">Today</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.schedule.map((row, i) => {
              const isBreak = row.period === 'Break' || row.period === 'Lunch';
              if (isBreak) {
                return (
                  <tr key={i} className="tt-break-row">
                    <td colSpan={7} className="tt-break-full">
                      <span>{row.period === 'Lunch' ? '🍱' : '☕'}</span>
                      <span>{row.period} Break</span>
                      <span className="tt-break-time">{row.time}</span>
                    </td>
                  </tr>
                );
              }
              return (
                <tr key={i} className="tt-row">
                  <td className="tt-td tt-td-period">P{row.period}</td>
                  <td className="tt-td tt-td-time">{row.time}</td>
                  {days.map(day => renderDesktopCell(row, day))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ── Mobile view ── */}
      <div className="tt-mobile-view">
        <div className="tt-mobile-list">
          {data.schedule.map((row) => renderMobileCard(row))}
        </div>
      </div>

      {/* ── Legend (student only) ── */}
      {isStudent && (
        <div className="tt-legend">
          <h4 className="tt-legend-title">Subject Colour Guide</h4>
          <div className="tt-legend-grid">
            {Object.entries(subjectMeta).map(([subj, meta]) => (
              <div key={subj} className="tt-legend-item" style={{ background: meta.bg, borderLeft: `3px solid ${meta.border}` }}>
                <span>{meta.icon}</span>
                <span>{subj}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimetablePage;
