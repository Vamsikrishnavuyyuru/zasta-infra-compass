
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Zasta Group office coordinates
  const officeCoordinates: [number, number] = [78.3949, 17.4875]; // Hyderabad, India

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken.trim()) return;

    try {
      mapboxgl.accessToken = mapboxToken.trim();
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: officeCoordinates,
        zoom: 15,
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Add marker for office location
      new mapboxgl.Marker({
        color: '#0077B5', // zasta-blue-600
      })
        .setLngLat(officeCoordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <div class="p-2">
                <h3 class="font-semibold text-sm">Zasta Group</h3>
                <p class="text-xs text-gray-600">Emami Swanlake Apartments<br>Kukatpally, Hyderabad</p>
              </div>
            `)
        )
        .addTo(map.current);

      setIsMapLoaded(true);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!isMapLoaded && !mapboxToken) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <MapPin className="w-12 h-12 text-zasta-blue-600 mx-auto" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Interactive Map</h3>
            <p className="text-gray-600 mb-4">
              Enter your Mapbox access token to view our office location on an interactive map.
            </p>
            <Input
              type="text"
              placeholder="Enter Mapbox Access Token"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="mb-4"
            />
            <Button 
              onClick={initializeMap}
              className="w-full bg-zasta-blue-600 hover:bg-zasta-blue-700"
              disabled={!mapboxToken.trim()}
            >
              Load Map
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      {!isMapLoaded && mapboxToken && (
        <CardContent className="p-6 text-center">
          <p className="text-gray-600">Loading map...</p>
        </CardContent>
      )}
      <div 
        ref={mapContainer} 
        className={`w-full h-64 ${!isMapLoaded ? 'hidden' : ''}`}
      />
    </Card>
  );
};

export default InteractiveMap;
