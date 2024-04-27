import { scope } from "arktype";

export const types = scope({
  SketchGeometryProperty:
    '"x" | "y" | "radius" | "start_angle" | "end_angle" | "radmin"',
  oid: "string",
  Id: {
    id: "oid",
  },
  ObjectParam: {
    o_id: "oid",
    prop: "SketchGeometryProperty",
  },
  InternalAlignmentType:
    "0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17",
  Constraint_Alignment: "0 | 1",
  Equal: {
    id: "oid",
    type: '"equal"',
    param1: "ObjectParam | number | string",
    param2: "ObjectParam | number | string",
    "driving?": "boolean",
    "internalalignment?": "0 | 1",
    "temporary?": "boolean",
    "scale?": "number",
  },
  Proportional: {
    id: "oid",
    type: '"proportional"',
    param1: "ObjectParam | number | string",
    param2: "ObjectParam | number | string",
    ratio: "number",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  Difference: {
    id: "oid",
    type: '"difference"',
    param1: "ObjectParam | number | string",
    param2: "ObjectParam | number | string",
    difference: "ObjectParam | number | string",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  P2PDistance: {
    id: "oid",
    type: '"p2p_distance"',
    p1_id: "oid",
    p2_id: "oid",
    distance: "ObjectParam | number | string",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  P2PAngle_INCR_ANGLE: {
    id: "oid",
    type: '"p2p_angle_incr_angle"',
    p1_id: "oid",
    p2_id: "oid",
    angle: "ObjectParam | number | string",
    incrAngle: "number",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  P2PAngle: {
    id: "oid",
    type: '"p2p_angle"',
    p1_id: "oid",
    p2_id: "oid",
    angle: "ObjectParam | number | string",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  P2LDistance: {
    id: "oid",
    type: '"p2l_distance"',
    p_id: "oid",
    l_id: "oid",
    distance: "ObjectParam | number | string",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  PointOnLine_PL: {
    id: "oid",
    type: '"point_on_line_pl"',
    p_id: "oid",
    l_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  PointOnLine_PPP: {
    id: "oid",
    type: '"point_on_line_ppp"',
    p_id: "oid",
    lp1_id: "oid",
    lp2_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  PointOnPerpBisector_PL: {
    id: "oid",
    type: '"point_on_perp_bisector_pl"',
    p_id: "oid",
    l_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  PointOnPerpBisector_PPP: {
    id: "oid",
    type: '"point_on_perp_bisector_ppp"',
    p_id: "oid",
    lp1_id: "oid",
    lp2_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  Parallel: {
    id: "oid",
    type: '"parallel"',
    l1_id: "oid",
    l2_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  Perpendicular_LL: {
    id: "oid",
    type: '"perpendicular_ll"',
    l1_id: "oid",
    l2_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  Perpendicular_PPPP: {
    id: "oid",
    type: '"perpendicular_pppp"',
    l1p1_id: "oid",
    l1p2_id: "oid",
    l2p1_id: "oid",
    l2p2_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  L2LAngle_LL: {
    id: "oid",
    type: '"l2l_angle_ll"',
    l1_id: "oid",
    l2_id: "oid",
    angle: "ObjectParam | number | string",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  L2LAngle_PPPP: {
    id: "oid",
    type: '"l2l_angle_pppp"',
    l1p1_id: "oid",
    l1p2_id: "oid",
    l2p1_id: "oid",
    l2p2_id: "oid",
    angle: "ObjectParam | number | string",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  AngleViaPoint: {
    id: "oid",
    type: '"angle_via_point"',
    crv1_id: "oid",
    crv2_id: "oid",
    p_id: "oid",
    angle: "ObjectParam | number | string",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  MidpointOnLine_LL: {
    id: "oid",
    type: '"midpoint_on_line_ll"',
    l1_id: "oid",
    l2_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  MidpointOnLine_PPPP: {
    id: "oid",
    type: '"midpoint_on_line_pppp"',
    l1p1_id: "oid",
    l1p2_id: "oid",
    l2p1_id: "oid",
    l2p2_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  TangentCircumf: {
    id: "oid",
    type: '"tangent_circumf"',
    p1_id: "oid",
    p2_id: "oid",
    rd1: "ObjectParam | number | string",
    rd2: "ObjectParam | number | string",
    "internal?": "boolean",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  TangentAtBSplineKnot: {
    id: "oid",
    type: '"tangent_at_bspline_knot"',
    b_id: "oid",
    l_id: "oid",
    knotindex: "number",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  P2PCoincident: {
    id: "oid",
    type: '"p2p_coincident"',
    p1_id: "oid",
    p2_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  Horizontal_L: {
    id: "oid",
    type: '"horizontal_l"',
    l_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  Horizontal_PP: {
    id: "oid",
    type: '"horizontal_pp"',
    p1_id: "oid",
    p2_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  Vertical_L: {
    id: "oid",
    type: '"vertical_l"',
    l_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  Vertical_PP: {
    id: "oid",
    type: '"vertical_pp"',
    p1_id: "oid",
    p2_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  CoordinateX: {
    id: "oid",
    type: '"coordinate_x"',
    p_id: "oid",
    x: "ObjectParam | number | string",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  CoordinateY: {
    id: "oid",
    type: '"coordinate_y"',
    p_id: "oid",
    y: "ObjectParam | number | string",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  ArcRules: {
    id: "oid",
    type: '"arc_rules"',
    a_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  PointOnCircle: {
    id: "oid",
    type: '"point_on_circle"',
    p_id: "oid",
    c_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  PointOnEllipse: {
    id: "oid",
    type: '"point_on_ellipse"',
    p_id: "oid",
    e_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  PointOnHyperbolicArc: {
    id: "oid",
    type: '"point_on_hyperbolic_arc"',
    p_id: "oid",
    e_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  PointOnParabolicArc: {
    id: "oid",
    type: '"point_on_parabolic_arc"',
    p_id: "oid",
    e_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  PointOnBSpline: {
    id: "oid",
    type: '"point_on_bspline"',
    p_id: "oid",
    b_id: "oid",
    pointparam: "ObjectParam | number | string",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  ArcOfEllipseRules: {
    id: "oid",
    type: '"arc_of_ellipse_rules"',
    a_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  CurveValue: {
    id: "oid",
    type: '"curve_value"',
    p_id: "oid",
    a_id: "oid",
    u: "ObjectParam | number | string",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  ArcOfHyperbolaRules: {
    id: "oid",
    type: '"arc_of_hyperbola_rules"',
    a_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  ArcOfParabolaRules: {
    id: "oid",
    type: '"arc_of_parabola_rules"',
    a_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  PointOnArc: {
    id: "oid",
    type: '"point_on_arc"',
    p_id: "oid",
    a_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  PerpendicularLine2Arc: {
    id: "oid",
    type: '"perpendicular_line2arc"',
    p1_id: "oid",
    p2_id: "oid",
    a_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  PerpendicularArc2Line: {
    id: "oid",
    type: '"perpendicular_arc2line"',
    a_id: "oid",
    p1_id: "oid",
    p2_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  PerpendicularCircle2Arc: {
    id: "oid",
    type: '"perpendicular_circle2arc"',
    center_id: "oid",
    radius: "ObjectParam | number | string",
    a_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  PerpendicularArc2Circle: {
    id: "oid",
    type: '"perpendicular_arc2circle"',
    a_id: "oid",
    center_id: "oid",
    radius: "ObjectParam | number | string",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  PerpendicularArc2Arc: {
    id: "oid",
    type: '"perpendicular_arc2arc"',
    a1_id: "oid",
    reverse1: "boolean",
    a2_id: "oid",
    reverse2: "boolean",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  Tangent_LC: {
    id: "oid",
    type: '"tangent_lc"',
    l_id: "oid",
    c_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  Tangent_LE: {
    id: "oid",
    type: '"tangent_le"',
    l_id: "oid",
    e_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  Tangent_LA: {
    id: "oid",
    type: '"tangent_la"',
    l_id: "oid",
    a_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  Tangent_CC: {
    id: "oid",
    type: '"tangent_cc"',
    c1_id: "oid",
    c2_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  Tangent_AA: {
    id: "oid",
    type: '"tangent_aa"',
    a1_id: "oid",
    a2_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  Tangent_CA: {
    id: "oid",
    type: '"tangent_ca"',
    c_id: "oid",
    a_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  CircleRadius: {
    id: "oid",
    type: '"circle_radius"',
    c_id: "oid",
    radius: "ObjectParam | number | string",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  ArcRadius: {
    id: "oid",
    type: '"arc_radius"',
    a_id: "oid",
    radius: "ObjectParam | number | string",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  CircleDiameter: {
    id: "oid",
    type: '"circle_diameter"',
    c_id: "oid",
    diameter: "ObjectParam | number | string",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  ArcDiameter: {
    id: "oid",
    type: '"arc_diameter"',
    a_id: "oid",
    diameter: "ObjectParam | number | string",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  EqualLength: {
    id: "oid",
    type: '"equal_length"',
    l1_id: "oid",
    l2_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  EqualRadius_CC: {
    id: "oid",
    type: '"equal_radius_cc"',
    c1_id: "oid",
    c2_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  EqualRadii_EE: {
    id: "oid",
    type: '"equal_radii_ee"',
    e1_id: "oid",
    e2_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  EqualRadii_AHAH: {
    id: "oid",
    type: '"equal_radii_ahah"',
    a1_id: "oid",
    a2_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  EqualRadius_CA: {
    id: "oid",
    type: '"equal_radius_ca"',
    c1_id: "oid",
    a2_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  EqualRadius_AA: {
    id: "oid",
    type: '"equal_radius_aa"',
    a1_id: "oid",
    a2_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  EqualFocus: {
    id: "oid",
    type: '"equal_focus"',
    a1_id: "oid",
    a2_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  P2PSymmetric_PPL: {
    id: "oid",
    type: '"p2p_symmetric_ppl"',
    p1_id: "oid",
    p2_id: "oid",
    l_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  P2PSymmetric_PPP: {
    id: "oid",
    type: '"p2p_symmetric_ppp"',
    p1_id: "oid",
    p2_id: "oid",
    p_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  SnellsLaw: {
    id: "oid",
    type: '"snells_law"',
    ray1_id: "oid",
    ray2_id: "oid",
    boundary_id: "oid",
    p_id: "oid",
    n1: "ObjectParam | number | string",
    n2: "ObjectParam | number | string",
    flipn1: "boolean",
    flipn2: "boolean",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  C2CDistance: {
    id: "oid",
    type: '"c2cdistance"',
    c1_id: "oid",
    c2_id: "oid",
    dist: "ObjectParam | number | string",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  C2LDistance: {
    id: "oid",
    type: '"c2ldistance"',
    c_id: "oid",
    l_id: "oid",
    dist: "ObjectParam | number | string",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  InternalAlignmentPoint2Ellipse: {
    id: "oid",
    type: '"internal_alignment_point2ellipse"',
    e_id: "oid",
    p1_id: "oid",
    alignmentType:
      "0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  InternalAlignmentEllipseMajorDiameter: {
    id: "oid",
    type: '"internal_alignment_ellipse_major_diameter"',
    e_id: "oid",
    p1_id: "oid",
    p2_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  InternalAlignmentEllipseMinorDiameter: {
    id: "oid",
    type: '"internal_alignment_ellipse_minor_diameter"',
    e_id: "oid",
    p1_id: "oid",
    p2_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  InternalAlignmentEllipseFocus1: {
    id: "oid",
    type: '"internal_alignment_ellipse_focus1"',
    e_id: "oid",
    p1_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  InternalAlignmentEllipseFocus2: {
    id: "oid",
    type: '"internal_alignment_ellipse_focus2"',
    e_id: "oid",
    p1_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  InternalAlignmentPoint2Hyperbola: {
    id: "oid",
    type: '"internal_alignment_point2hyperbola"',
    e_id: "oid",
    p1_id: "oid",
    alignmentType:
      "0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  InternalAlignmentHyperbolaMajorDiameter: {
    id: "oid",
    type: '"internal_alignment_hyperbola_major_diameter"',
    e_id: "oid",
    p1_id: "oid",
    p2_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  InternalAlignmentHyperbolaMinorDiameter: {
    id: "oid",
    type: '"internal_alignment_hyperbola_minor_diameter"',
    e_id: "oid",
    p1_id: "oid",
    p2_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  InternalAlignmentHyperbolaFocus: {
    id: "oid",
    type: '"internal_alignment_hyperbola_focus"',
    e_id: "oid",
    p1_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  InternalAlignmentParabolaFocus: {
    id: "oid",
    type: '"internal_alignment_parabola_focus"',
    e_id: "oid",
    p1_id: "oid",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  InternalAlignmentBSplineControlPoint: {
    id: "oid",
    type: '"internal_alignment_bspline_control_point"',
    b_id: "oid",
    c_id: "oid",
    poleindex: "number",
    "tag?": "number",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  InternalAlignmentKnotPoint: {
    id: "oid",
    type: '"internal_alignment_knot_point"',
    b_id: "oid",
    p_id: "oid",
    knotindex: "number",
    "driving?": "boolean",
    "temporary?": "boolean",
    "scale?": "number",
  },
  Constraint:
    "Equal | Proportional | Difference | P2PDistance | P2PAngle_INCR_ANGLE | P2PAngle | P2LDistance | PointOnLine_PL | PointOnLine_PPP | PointOnPerpBisector_PL | PointOnPerpBisector_PPP | Parallel | Perpendicular_LL | Perpendicular_PPPP | L2LAngle_LL | L2LAngle_PPPP | AngleViaPoint | MidpointOnLine_LL | MidpointOnLine_PPPP | TangentCircumf | TangentAtBSplineKnot | P2PCoincident | Horizontal_L | Horizontal_PP | Vertical_L | Vertical_PP | CoordinateX | CoordinateY | ArcRules | PointOnCircle | PointOnEllipse | PointOnHyperbolicArc | PointOnParabolicArc | PointOnBSpline | ArcOfEllipseRules | CurveValue | ArcOfHyperbolaRules | ArcOfParabolaRules | PointOnArc | PerpendicularLine2Arc | PerpendicularArc2Line | PerpendicularCircle2Arc | PerpendicularArc2Circle | PerpendicularArc2Arc | Tangent_LC | Tangent_LE | Tangent_LA | Tangent_CC | Tangent_AA | Tangent_CA | CircleRadius | ArcRadius | CircleDiameter | ArcDiameter | EqualLength | EqualRadius_CC | EqualRadii_EE | EqualRadii_AHAH | EqualRadius_CA | EqualRadius_AA | EqualFocus | P2PSymmetric_PPL | P2PSymmetric_PPP | SnellsLaw | C2CDistance | C2LDistance | InternalAlignmentPoint2Ellipse | InternalAlignmentEllipseMajorDiameter | InternalAlignmentEllipseMinorDiameter | InternalAlignmentEllipseFocus1 | InternalAlignmentEllipseFocus2 | InternalAlignmentPoint2Hyperbola | InternalAlignmentHyperbolaMajorDiameter | InternalAlignmentHyperbolaMinorDiameter | InternalAlignmentHyperbolaFocus | InternalAlignmentParabolaFocus | InternalAlignmentBSplineControlPoint | InternalAlignmentKnotPoint",
  ConstraintParamType:
    'oid | "equal" | ObjectParam | number | string | ObjectParam | number | string | boolean | 0 | 1 | boolean | number | oid | "proportional" | ObjectParam | number | string | ObjectParam | number | string | number | boolean | boolean | number | oid | "difference" | ObjectParam | number | string | ObjectParam | number | string | ObjectParam | number | string | boolean | boolean | number | oid | "p2p_distance" | oid | oid | ObjectParam | number | string | boolean | boolean | number | oid | "p2p_angle_incr_angle" | oid | oid | ObjectParam | number | string | number | boolean | boolean | number | oid | "p2p_angle" | oid | oid | ObjectParam | number | string | boolean | boolean | number | oid | "p2l_distance" | oid | oid | ObjectParam | number | string | boolean | boolean | number | oid | "point_on_line_pl" | oid | oid | boolean | boolean | number | oid | "point_on_line_ppp" | oid | oid | oid | boolean | boolean | number | oid | "point_on_perp_bisector_pl" | oid | oid | boolean | boolean | number | oid | "point_on_perp_bisector_ppp" | oid | oid | oid | boolean | boolean | number | oid | "parallel" | oid | oid | boolean | boolean | number | oid | "perpendicular_ll" | oid | oid | boolean | boolean | number | oid | "perpendicular_pppp" | oid | oid | oid | oid | boolean | boolean | number | oid | "l2l_angle_ll" | oid | oid | ObjectParam | number | string | boolean | boolean | number | oid | "l2l_angle_pppp" | oid | oid | oid | oid | ObjectParam | number | string | boolean | boolean | number | oid | "angle_via_point" | oid | oid | oid | ObjectParam | number | string | boolean | boolean | number | oid | "midpoint_on_line_ll" | oid | oid | boolean | boolean | number | oid | "midpoint_on_line_pppp" | oid | oid | oid | oid | boolean | boolean | number | oid | "tangent_circumf" | oid | oid | ObjectParam | number | string | ObjectParam | number | string | boolean | boolean | boolean | number | oid | "tangent_at_bspline_knot" | oid | oid | number | boolean | boolean | number | oid | "p2p_coincident" | oid | oid | boolean | boolean | number | oid | "horizontal_l" | oid | boolean | boolean | number | oid | "horizontal_pp" | oid | oid | boolean | boolean | number | oid | "vertical_l" | oid | boolean | boolean | number | oid | "vertical_pp" | oid | oid | boolean | boolean | number | oid | "coordinate_x" | oid | ObjectParam | number | string | boolean | boolean | number | oid | "coordinate_y" | oid | ObjectParam | number | string | boolean | boolean | number | oid | "arc_rules" | oid | boolean | boolean | number | oid | "point_on_circle" | oid | oid | boolean | boolean | number | oid | "point_on_ellipse" | oid | oid | boolean | boolean | number | oid | "point_on_hyperbolic_arc" | oid | oid | boolean | boolean | number | oid | "point_on_parabolic_arc" | oid | oid | boolean | boolean | number | oid | "point_on_bspline" | oid | oid | ObjectParam | number | string | boolean | boolean | number | oid | "arc_of_ellipse_rules" | oid | boolean | boolean | number | oid | "curve_value" | oid | oid | ObjectParam | number | string | boolean | boolean | number | oid | "arc_of_hyperbola_rules" | oid | boolean | boolean | number | oid | "arc_of_parabola_rules" | oid | boolean | boolean | number | oid | "point_on_arc" | oid | oid | boolean | boolean | number | oid | "perpendicular_line2arc" | oid | oid | oid | boolean | boolean | number | oid | "perpendicular_arc2line" | oid | oid | oid | boolean | boolean | number | oid | "perpendicular_circle2arc" | oid | ObjectParam | number | string | oid | boolean | boolean | number | oid | "perpendicular_arc2circle" | oid | oid | ObjectParam | number | string | boolean | boolean | number | oid | "perpendicular_arc2arc" | oid | boolean | oid | boolean | boolean | boolean | number | oid | "tangent_lc" | oid | oid | boolean | boolean | number | oid | "tangent_le" | oid | oid | boolean | boolean | number | oid | "tangent_la" | oid | oid | boolean | boolean | number | oid | "tangent_cc" | oid | oid | boolean | boolean | number | oid | "tangent_aa" | oid | oid | boolean | boolean | number | oid | "tangent_ca" | oid | oid | boolean | boolean | number | oid | "circle_radius" | oid | ObjectParam | number | string | boolean | boolean | number | oid | "arc_radius" | oid | ObjectParam | number | string | boolean | boolean | number | oid | "circle_diameter" | oid | ObjectParam | number | string | boolean | boolean | number | oid | "arc_diameter" | oid | ObjectParam | number | string | boolean | boolean | number | oid | "equal_length" | oid | oid | boolean | boolean | number | oid | "equal_radius_cc" | oid | oid | boolean | boolean | number | oid | "equal_radii_ee" | oid | oid | boolean | boolean | number | oid | "equal_radii_ahah" | oid | oid | boolean | boolean | number | oid | "equal_radius_ca" | oid | oid | boolean | boolean | number | oid | "equal_radius_aa" | oid | oid | boolean | boolean | number | oid | "equal_focus" | oid | oid | boolean | boolean | number | oid | "p2p_symmetric_ppl" | oid | oid | oid | boolean | boolean | number | oid | "p2p_symmetric_ppp" | oid | oid | oid | boolean | boolean | number | oid | "snells_law" | oid | oid | oid | oid | ObjectParam | number | string | ObjectParam | number | string | boolean | boolean | boolean | boolean | number | oid | "c2cdistance" | oid | oid | ObjectParam | number | string | boolean | boolean | number | oid | "c2ldistance" | oid | oid | ObjectParam | number | string | boolean | boolean | number | oid | "internal_alignment_point2ellipse" | oid | oid | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | boolean | boolean | number | oid | "internal_alignment_ellipse_major_diameter" | oid | oid | oid | boolean | boolean | number | oid | "internal_alignment_ellipse_minor_diameter" | oid | oid | oid | boolean | boolean | number | oid | "internal_alignment_ellipse_focus1" | oid | oid | boolean | boolean | number | oid | "internal_alignment_ellipse_focus2" | oid | oid | boolean | boolean | number | oid | "internal_alignment_point2hyperbola" | oid | oid | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | boolean | boolean | number | oid | "internal_alignment_hyperbola_major_diameter" | oid | oid | oid | boolean | boolean | number | oid | "internal_alignment_hyperbola_minor_diameter" | oid | oid | oid | boolean | boolean | number | oid | "internal_alignment_hyperbola_focus" | oid | oid | boolean | boolean | number | oid | "internal_alignment_parabola_focus" | oid | oid | boolean | boolean | number | oid | "internal_alignment_bspline_control_point" | oid | oid | number | number | boolean | boolean | number | oid | "internal_alignment_knot_point" | oid | oid | number | boolean | boolean | number',
  IArc: {
    start_id: "oid",
    end_id: "oid",
    start_angle: "number",
    end_angle: "number",
  },
  SketchPoint: {
    id: "oid",
    type: '"point"',
    x: "number",
    y: "number",
    fixed: "boolean",
  },
  SketchLine: {
    id: "oid",
    type: '"line"',
    p1_id: "oid",
    p2_id: "oid",
  },
  SketchCircle: {
    id: "oid",
    type: '"circle"',
    c_id: "oid",
    radius: "number",
  },
  SketchArc: {
    id: "oid",
    start_id: "oid",
    end_id: "oid",
    start_angle: "number",
    end_angle: "number",
    type: '"arc"',
    c_id: "oid",
    radius: "number",
  },
  SketchEllipse: {
    id: "oid",
    type: '"ellipse"',
    c_id: "oid",
    focus1_id: "oid",
    radmin: "number",
  },
  SketchArcOfEllipse: {
    id: "oid",
    start_id: "oid",
    end_id: "oid",
    start_angle: "number",
    end_angle: "number",
    type: '"arc_of_ellipse"',
    c_id: "oid",
    focus1_id: "oid",
    radmin: "number",
  },
  SketchParabola: {
    id: "oid",
    type: '"parabola"',
    vertex_id: "oid",
    focus1_id: "oid",
  },
  SketchArcOfParabola: {
    id: "oid",
    start_id: "oid",
    end_id: "oid",
    start_angle: "number",
    end_angle: "number",
    type: '"arc_of_parabola"',
    vertex_id: "oid",
    focus1_id: "oid",
  },
  SketchHyperbola: {
    id: "oid",
    type: '"hyperbola"',
    c_id: "oid",
    focus1_id: "oid",
    radmin: "number",
  },
  SketchArcOfHyperbola: {
    id: "oid",
    start_id: "oid",
    end_id: "oid",
    start_angle: "number",
    end_angle: "number",
    type: '"arc_of_hyperbola"',
    c_id: "oid",
    focus1_id: "oid",
    radmin: "number",
  },
  SketchGeometry:
    "SketchPoint | SketchLine | SketchCircle | SketchArc | SketchEllipse | SketchArcOfEllipse | SketchParabola | SketchArcOfParabola | SketchHyperbola | SketchArcOfHyperbola",
  SketchPrimitive: "SketchGeometry | Constraint",
  SketchParam: {
    type: '"param"',
    name: "string",
    value: "number",
  },
}).compile();

export type SketchGeometryProperty = typeof SketchGeometryProperty.infer;
export const SketchGeometryProperty = types.SketchGeometryProperty;
export type oid = typeof oid.infer;
export const oid = types.oid;
export type Id = typeof Id.infer;
export const Id = types.Id;
export type ObjectParam = typeof ObjectParam.infer;
export const ObjectParam = types.ObjectParam;
export type InternalAlignmentType = typeof InternalAlignmentType.infer;
export const InternalAlignmentType = types.InternalAlignmentType;
export type Constraint_Alignment = typeof Constraint_Alignment.infer;
export const Constraint_Alignment = types.Constraint_Alignment;
export type Equal = typeof Equal.infer;
export const Equal = types.Equal;
export type Proportional = typeof Proportional.infer;
export const Proportional = types.Proportional;
export type Difference = typeof Difference.infer;
export const Difference = types.Difference;
export type P2PDistance = typeof P2PDistance.infer;
export const P2PDistance = types.P2PDistance;
export type P2PAngle_INCR_ANGLE = typeof P2PAngle_INCR_ANGLE.infer;
export const P2PAngle_INCR_ANGLE = types.P2PAngle_INCR_ANGLE;
export type P2PAngle = typeof P2PAngle.infer;
export const P2PAngle = types.P2PAngle;
export type P2LDistance = typeof P2LDistance.infer;
export const P2LDistance = types.P2LDistance;
export type PointOnLine_PL = typeof PointOnLine_PL.infer;
export const PointOnLine_PL = types.PointOnLine_PL;
export type PointOnLine_PPP = typeof PointOnLine_PPP.infer;
export const PointOnLine_PPP = types.PointOnLine_PPP;
export type PointOnPerpBisector_PL = typeof PointOnPerpBisector_PL.infer;
export const PointOnPerpBisector_PL = types.PointOnPerpBisector_PL;
export type PointOnPerpBisector_PPP = typeof PointOnPerpBisector_PPP.infer;
export const PointOnPerpBisector_PPP = types.PointOnPerpBisector_PPP;
export type Parallel = typeof Parallel.infer;
export const Parallel = types.Parallel;
export type Perpendicular_LL = typeof Perpendicular_LL.infer;
export const Perpendicular_LL = types.Perpendicular_LL;
export type Perpendicular_PPPP = typeof Perpendicular_PPPP.infer;
export const Perpendicular_PPPP = types.Perpendicular_PPPP;
export type L2LAngle_LL = typeof L2LAngle_LL.infer;
export const L2LAngle_LL = types.L2LAngle_LL;
export type L2LAngle_PPPP = typeof L2LAngle_PPPP.infer;
export const L2LAngle_PPPP = types.L2LAngle_PPPP;
export type AngleViaPoint = typeof AngleViaPoint.infer;
export const AngleViaPoint = types.AngleViaPoint;
export type MidpointOnLine_LL = typeof MidpointOnLine_LL.infer;
export const MidpointOnLine_LL = types.MidpointOnLine_LL;
export type MidpointOnLine_PPPP = typeof MidpointOnLine_PPPP.infer;
export const MidpointOnLine_PPPP = types.MidpointOnLine_PPPP;
export type TangentCircumf = typeof TangentCircumf.infer;
export const TangentCircumf = types.TangentCircumf;
export type TangentAtBSplineKnot = typeof TangentAtBSplineKnot.infer;
export const TangentAtBSplineKnot = types.TangentAtBSplineKnot;
export type P2PCoincident = typeof P2PCoincident.infer;
export const P2PCoincident = types.P2PCoincident;
export type Horizontal_L = typeof Horizontal_L.infer;
export const Horizontal_L = types.Horizontal_L;
export type Horizontal_PP = typeof Horizontal_PP.infer;
export const Horizontal_PP = types.Horizontal_PP;
export type Vertical_L = typeof Vertical_L.infer;
export const Vertical_L = types.Vertical_L;
export type Vertical_PP = typeof Vertical_PP.infer;
export const Vertical_PP = types.Vertical_PP;
export type CoordinateX = typeof CoordinateX.infer;
export const CoordinateX = types.CoordinateX;
export type CoordinateY = typeof CoordinateY.infer;
export const CoordinateY = types.CoordinateY;
export type ArcRules = typeof ArcRules.infer;
export const ArcRules = types.ArcRules;
export type PointOnCircle = typeof PointOnCircle.infer;
export const PointOnCircle = types.PointOnCircle;
export type PointOnEllipse = typeof PointOnEllipse.infer;
export const PointOnEllipse = types.PointOnEllipse;
export type PointOnHyperbolicArc = typeof PointOnHyperbolicArc.infer;
export const PointOnHyperbolicArc = types.PointOnHyperbolicArc;
export type PointOnParabolicArc = typeof PointOnParabolicArc.infer;
export const PointOnParabolicArc = types.PointOnParabolicArc;
export type PointOnBSpline = typeof PointOnBSpline.infer;
export const PointOnBSpline = types.PointOnBSpline;
export type ArcOfEllipseRules = typeof ArcOfEllipseRules.infer;
export const ArcOfEllipseRules = types.ArcOfEllipseRules;
export type CurveValue = typeof CurveValue.infer;
export const CurveValue = types.CurveValue;
export type ArcOfHyperbolaRules = typeof ArcOfHyperbolaRules.infer;
export const ArcOfHyperbolaRules = types.ArcOfHyperbolaRules;
export type ArcOfParabolaRules = typeof ArcOfParabolaRules.infer;
export const ArcOfParabolaRules = types.ArcOfParabolaRules;
export type PointOnArc = typeof PointOnArc.infer;
export const PointOnArc = types.PointOnArc;
export type PerpendicularLine2Arc = typeof PerpendicularLine2Arc.infer;
export const PerpendicularLine2Arc = types.PerpendicularLine2Arc;
export type PerpendicularArc2Line = typeof PerpendicularArc2Line.infer;
export const PerpendicularArc2Line = types.PerpendicularArc2Line;
export type PerpendicularCircle2Arc = typeof PerpendicularCircle2Arc.infer;
export const PerpendicularCircle2Arc = types.PerpendicularCircle2Arc;
export type PerpendicularArc2Circle = typeof PerpendicularArc2Circle.infer;
export const PerpendicularArc2Circle = types.PerpendicularArc2Circle;
export type PerpendicularArc2Arc = typeof PerpendicularArc2Arc.infer;
export const PerpendicularArc2Arc = types.PerpendicularArc2Arc;
export type Tangent_LC = typeof Tangent_LC.infer;
export const Tangent_LC = types.Tangent_LC;
export type Tangent_LE = typeof Tangent_LE.infer;
export const Tangent_LE = types.Tangent_LE;
export type Tangent_LA = typeof Tangent_LA.infer;
export const Tangent_LA = types.Tangent_LA;
export type Tangent_CC = typeof Tangent_CC.infer;
export const Tangent_CC = types.Tangent_CC;
export type Tangent_AA = typeof Tangent_AA.infer;
export const Tangent_AA = types.Tangent_AA;
export type Tangent_CA = typeof Tangent_CA.infer;
export const Tangent_CA = types.Tangent_CA;
export type CircleRadius = typeof CircleRadius.infer;
export const CircleRadius = types.CircleRadius;
export type ArcRadius = typeof ArcRadius.infer;
export const ArcRadius = types.ArcRadius;
export type CircleDiameter = typeof CircleDiameter.infer;
export const CircleDiameter = types.CircleDiameter;
export type ArcDiameter = typeof ArcDiameter.infer;
export const ArcDiameter = types.ArcDiameter;
export type EqualLength = typeof EqualLength.infer;
export const EqualLength = types.EqualLength;
export type EqualRadius_CC = typeof EqualRadius_CC.infer;
export const EqualRadius_CC = types.EqualRadius_CC;
export type EqualRadii_EE = typeof EqualRadii_EE.infer;
export const EqualRadii_EE = types.EqualRadii_EE;
export type EqualRadii_AHAH = typeof EqualRadii_AHAH.infer;
export const EqualRadii_AHAH = types.EqualRadii_AHAH;
export type EqualRadius_CA = typeof EqualRadius_CA.infer;
export const EqualRadius_CA = types.EqualRadius_CA;
export type EqualRadius_AA = typeof EqualRadius_AA.infer;
export const EqualRadius_AA = types.EqualRadius_AA;
export type EqualFocus = typeof EqualFocus.infer;
export const EqualFocus = types.EqualFocus;
export type P2PSymmetric_PPL = typeof P2PSymmetric_PPL.infer;
export const P2PSymmetric_PPL = types.P2PSymmetric_PPL;
export type P2PSymmetric_PPP = typeof P2PSymmetric_PPP.infer;
export const P2PSymmetric_PPP = types.P2PSymmetric_PPP;
export type SnellsLaw = typeof SnellsLaw.infer;
export const SnellsLaw = types.SnellsLaw;
export type C2CDistance = typeof C2CDistance.infer;
export const C2CDistance = types.C2CDistance;
export type C2LDistance = typeof C2LDistance.infer;
export const C2LDistance = types.C2LDistance;
export type InternalAlignmentPoint2Ellipse =
  typeof InternalAlignmentPoint2Ellipse.infer;
export const InternalAlignmentPoint2Ellipse =
  types.InternalAlignmentPoint2Ellipse;
export type InternalAlignmentEllipseMajorDiameter =
  typeof InternalAlignmentEllipseMajorDiameter.infer;
export const InternalAlignmentEllipseMajorDiameter =
  types.InternalAlignmentEllipseMajorDiameter;
export type InternalAlignmentEllipseMinorDiameter =
  typeof InternalAlignmentEllipseMinorDiameter.infer;
export const InternalAlignmentEllipseMinorDiameter =
  types.InternalAlignmentEllipseMinorDiameter;
export type InternalAlignmentEllipseFocus1 =
  typeof InternalAlignmentEllipseFocus1.infer;
export const InternalAlignmentEllipseFocus1 =
  types.InternalAlignmentEllipseFocus1;
export type InternalAlignmentEllipseFocus2 =
  typeof InternalAlignmentEllipseFocus2.infer;
export const InternalAlignmentEllipseFocus2 =
  types.InternalAlignmentEllipseFocus2;
export type InternalAlignmentPoint2Hyperbola =
  typeof InternalAlignmentPoint2Hyperbola.infer;
export const InternalAlignmentPoint2Hyperbola =
  types.InternalAlignmentPoint2Hyperbola;
export type InternalAlignmentHyperbolaMajorDiameter =
  typeof InternalAlignmentHyperbolaMajorDiameter.infer;
export const InternalAlignmentHyperbolaMajorDiameter =
  types.InternalAlignmentHyperbolaMajorDiameter;
export type InternalAlignmentHyperbolaMinorDiameter =
  typeof InternalAlignmentHyperbolaMinorDiameter.infer;
export const InternalAlignmentHyperbolaMinorDiameter =
  types.InternalAlignmentHyperbolaMinorDiameter;
export type InternalAlignmentHyperbolaFocus =
  typeof InternalAlignmentHyperbolaFocus.infer;
export const InternalAlignmentHyperbolaFocus =
  types.InternalAlignmentHyperbolaFocus;
export type InternalAlignmentParabolaFocus =
  typeof InternalAlignmentParabolaFocus.infer;
export const InternalAlignmentParabolaFocus =
  types.InternalAlignmentParabolaFocus;
export type InternalAlignmentBSplineControlPoint =
  typeof InternalAlignmentBSplineControlPoint.infer;
export const InternalAlignmentBSplineControlPoint =
  types.InternalAlignmentBSplineControlPoint;
export type InternalAlignmentKnotPoint =
  typeof InternalAlignmentKnotPoint.infer;
export const InternalAlignmentKnotPoint = types.InternalAlignmentKnotPoint;
export type Constraint = typeof Constraint.infer;
export const Constraint = types.Constraint;
export type ConstraintParamType = typeof ConstraintParamType.infer;
export const ConstraintParamType = types.ConstraintParamType;
export type IArc = typeof IArc.infer;
export const IArc = types.IArc;
export type SketchPoint = typeof SketchPoint.infer;
export const SketchPoint = types.SketchPoint;
export type SketchLine = typeof SketchLine.infer;
export const SketchLine = types.SketchLine;
export type SketchCircle = typeof SketchCircle.infer;
export const SketchCircle = types.SketchCircle;
export type SketchArc = typeof SketchArc.infer;
export const SketchArc = types.SketchArc;
export type SketchEllipse = typeof SketchEllipse.infer;
export const SketchEllipse = types.SketchEllipse;
export type SketchArcOfEllipse = typeof SketchArcOfEllipse.infer;
export const SketchArcOfEllipse = types.SketchArcOfEllipse;
export type SketchParabola = typeof SketchParabola.infer;
export const SketchParabola = types.SketchParabola;
export type SketchArcOfParabola = typeof SketchArcOfParabola.infer;
export const SketchArcOfParabola = types.SketchArcOfParabola;
export type SketchHyperbola = typeof SketchHyperbola.infer;
export const SketchHyperbola = types.SketchHyperbola;
export type SketchArcOfHyperbola = typeof SketchArcOfHyperbola.infer;
export const SketchArcOfHyperbola = types.SketchArcOfHyperbola;
export type SketchGeometry = typeof SketchGeometry.infer;
export const SketchGeometry = types.SketchGeometry;
export type SketchPrimitive = typeof SketchPrimitive.infer;
export const SketchPrimitive = types.SketchPrimitive;
export type SketchParam = typeof SketchParam.infer;
export const SketchParam = types.SketchParam;
