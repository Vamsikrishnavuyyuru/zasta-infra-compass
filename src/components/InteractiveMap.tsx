
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
        color: '#16a34a', // zasta-green-600
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
            <MapPin className="w-12 h-12 text-zasta-green-600 mx-auto" />
            <h3 className="text-lg font-semibold">Interactive Map</h3>
            <p className="text-gray-600 text-sm">
              To view our interactive map, please enter your Mapbox public token.
              You can get one free at{' '}
              <a 
                href="https://mapbox.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zasta-green-600 hover:underline"
              >
                mapbox.com
              </a>
            </p>
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Enter your Mapbox public token"
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="w-full"
              />
              <Button 
                onClick={initializeMap}
                disabled={!mapboxToken.trim()}
                className="w-full bg-zasta-green-600 hover:bg-zasta-green-700"
              >
                Load Map
              </Button>
            </div>
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
